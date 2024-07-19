import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Task=mongoose.model("tasks", todoSchema);
export default Task;

