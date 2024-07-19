import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resp=await axios.post("http://localhost:5050/todo/api/login", 
            {email, password},
            {withCredentials: true, credentials: 'include'} //for the cookie set in browser
        );

        if(resp.status==200){
            navigate('/');
        }        
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Email</h2>
                <input type="email" name="email" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label><h2>Password</h2>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </form>
    )
}

export default Login;