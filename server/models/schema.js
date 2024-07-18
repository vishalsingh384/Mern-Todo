import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const URL=mongoose.model("URL", todoSchema);
export default URL;

