import jwt from "jsonwebtoken";

export const setUser = async(user) => {
    try {
        const payload = {
            email: user.email,
            id: user._id.toString()
        }

        const options = {
            expiresIn: "1h"
        }

        const secretKey = process.env.KEY;
        const token = await jwt.sign(payload, secretKey, options);
        return token;
    } catch (err) {
        console.log(err.message);
        return null;
    }

}

export const getUser=async({token})=>{
    try {
        const decoded=await jwt.verify(token, process.env.KEY);
        return decoded;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}