import Task from "../models/schema.js";
import bcrypt from 'bcrypt';
import User from "../models/UserSchema.js";
import { setUser } from "../services/auth.js";

export const createTask = async (req, res, next) => {
    console.log("create called");
    try {
        const { taskName } = req.body;
        if (!taskName) {
            return res.status(400).json("req body is invalid");
        }

        const task = await Task.create({
            taskName
        });

        return res.status(201).json({
            success: true,
            task
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json("Internal server error");
    }
}

export const deleteTask = async (req, res, next) => {
    console.log("delete called");
    const { _id } = req.params;
    if (!_id) return res.status(400).json("id is required for this request");

    try {
        const deleteTask = await Task.findByIdAndDelete({ _id });
        if (!deleteTask) return res.status(404).json("id not found");

        return res.status(200).json("Deletetion success");
    } catch (err) {
        console.log(err.message);
        return res.json(400).json("Internal Server errro");
    }
}

export const getAllTasks = async (req, res, next) => {
    console.log("get called");

    try {
        const allTasks = await Task.find({});
        if (allTasks.length < 1) return res.status(200).json([]);

        return res.status(200).json({
            success: "true",
            allTasks
        })
    } catch (err) {
        console.log(err.message);
        return res.status(400).json("Internal server error");
    }

}

export const registerUser = async (req, res, next) => {
    console.log("register called");
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.json("Field missing");
        }

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(401).json("Email already exists");
        }

        const hashPass = await bcrypt.hash(password, 10);
        console.log(hashPass);
        const newUser = new User({
            username,
            email,
            password: hashPass,
        });

        await newUser.save();

        const currUser = user;
        const token = setUser(currUser);
        const options={
            httpOnly:true,
            expires: new Date(Date.now()+1*24*60*60*1000)
        }
        if (token) {
            res.cookie("token", token, options);
            return res.status(200).json("Logged in successfully");
        }
        return res.status(200).json("User registered");
    } catch (err) {
        console.log(err.message);
        return res.status(401).json("Internal server error");
    }

}

export const loginUser = async (req, res, next) => {
    console.log("login called");
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(401).json("Field missing");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json("User does not exist");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json("Incorrect password");
        }

        const currUser = user;
        const token = setUser(currUser);
        const options={
            httpOnly:true,
            expires: new Date(Date.now()+1*24*60*60*1000)
        }
        if (token) {
            res.cookie("token", token, options);
            return res.status(200).json("Logged in successfully");
        }
    } catch (err) {
        console.log(err.message);
        return res.status(401).json("Internal server error");
    }

}

