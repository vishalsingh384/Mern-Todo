import axios from "axios";
import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput";
import { ShowTask } from "./ShowTask";

const Home=()=>{
    const [tasks, setTasks] = useState([]);

    const getTask=async()=>{
      const {data}=await axios.get("http://localhost:5050/todo/api/getAll");
      setTasks(data.allTasks);
    }
    useEffect(() => {
      getTask();
    }, []);
    
    return (
      <div>
        <TaskInput getTask={getTask}/>
        {tasks?.map((task) => {
          return <ShowTask key={task._id} task={task} getTask={getTask}/>
        })}
      </div>
    )
}

export default Home;