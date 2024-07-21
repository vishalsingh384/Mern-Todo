import axios from 'axios';
import React, { useState } from 'react'

const ForgotPass = () => {
    const [email, setEmail] = useState('');

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault();
            const resp=await axios.post("http://localhost:5050/todo/api/forgot-password", 
                {email},
                {withCredentials: true, credentials: 'include'} //for the cookie set in browser
            );
    
            if(resp.status!=200){
                alert(resp.json());
            }        
            setEmail('');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Your Email</h2>
                <input type="email" name="email" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default ForgotPass