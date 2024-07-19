import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resp=await axios.post("http://localhost:5050/todo/api/register", {username, email, password});
        if(resp.status==200){
            navigate('/login');
        }        
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Username</h2>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label><h2>Email</h2>
                <input type="email" name="email" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label><h2>Password</h2>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
    )
}

export default Signup;