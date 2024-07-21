import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = () => {
    const [password, setPassword] = useState('');
    const {token}=useParams();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const resp=await axios.post(`http://localhost:5050/todo/api/reset-password/${token}`, 
                {password},
                {withCredentials: true, credentials: 'include'} //for the cookie set in browser
            );
    
            if(resp.status==200){
                navigate('/login');
            }        
            setPassword('');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>New Password</h2>
                <input type="password" name="password" placeholder="Your new password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ResetPass