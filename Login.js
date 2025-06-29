import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Implement login API call

        const postData = {
            username: username,
            password: password
        };

        console.log("Sending data:", postData);

        try {
            const response = await fetch('http://localhost:3000/login', { // Change URL if needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response:", data);

            if(data.response==="yes"){
                navigate('/search');
            }
            else{
                console.log("WRONG PASSWORD !!!")
            }
            

        } catch (error) {
            console.error("Error in POST request:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Login</button>
                <Link to="/signup" className='btn'>Signup</Link>
            </form>
        </div>
    );
};

export default Login;