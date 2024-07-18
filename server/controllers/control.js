import URL from "../models/schema.js";

export const createTask=async(req,res,next)=>{
    console.log("create called");
    try {
        const {taskName}=req.body;
        if(!taskName){
            return res.status(400).json("req body is invalid");
        }

        const task=await URL.create({
            taskName
        });

        return res.status(201).json({
            success:true,
            task
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json("Internal server error");
    }   
}

export const deleteTask=async(req,res,next)=>{
    console.log("delete called");
    const {_id}=req.params;
    if(!_id) return res.status(400).json("id is required for this request");

    try {
        const deleteTask=await URL.findByIdAndDelete({_id});
        if(!deleteTask) return res.status(404).json("id not found");

        return res.status(200).json("Deletetion success");
    } catch (err) {
        console.log(err.message);
        return res.json(400).json("Internal Server errro");
    }
}

export const getAllTasks=async(req, res, next)=>{
    console.log("get called");

    try {  
        const allTasks=await URL.find({});
        if(allTasks.length<1) return res.status(200).json([]);
    
        return res.status(200).json({
            success:"true",
            allTasks
        })
    } catch (err) {
        console.log(err.message);
        return res.status(400).json("Internal server error");
    }

}