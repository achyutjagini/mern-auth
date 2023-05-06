import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:1300/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        const data = await response.json()
        console.log(data)

    }
    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1 class="login_h1">Sign Up</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input class="login_input" type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input class="login_input" type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>

                    <button class="login_button" onClick={registerUser}>Sign Up</button>
                    <p class="p_login">Already have an account?<Link to="/login" class="link_login"> Log in</Link></p>

                </form>
            </div>
        </div>

    )
}

export default SignUp