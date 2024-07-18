import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { TaskInput } from './components/TaskInput';
import { ShowTask } from './components/ShowTask';

function App() {

  const [tasks, setTasks] = useState([]);

  const getTask=async()=>{
    const {data}=await axios.get("http://localhost:5050/api/getAll");
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

export default App


