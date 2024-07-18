import axios from "axios";
import { useState } from "react";

export const TaskInput = ({getTask}) => {
    const [text, setText] = useState('');
    const handleSubmit=async()=>{
        const taskPost=await axios.post("http://localhost:5050/api/create", {taskName:text});
        getTask();
        setText('');
    }
    return (
    < div >
        <input type='text' placeholder='Enter the taskName' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
    </div >
    )
}