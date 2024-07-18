import axios from "axios";

export const ShowTask = ({task, getTask}) => {
    const handleDelete=async(id)=>{
        const resp=await axios.delete(`http://localhost:5050/api/delete/${id}`);
        getTask();
    }
    return (
        <div className="taskContainer">
            <span>{task.taskName}</span>
            <button onClick={()=>handleDelete(task._id)}>Delete</button>
        </div>
    )
}