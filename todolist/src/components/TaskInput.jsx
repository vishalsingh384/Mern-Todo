import axios from "axios";
import { useState } from "react";

export const TaskInput = ({getTask}) => {
    const [text, setText] = useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const taskPost=await axios.post("http://localhost:5050/todo/api/create", {taskName:text});
        getTask();
        setText('');
    }
    return (
    < div >
        <input type='text' placeholder='Enter the taskName' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
    </div >
    )
}