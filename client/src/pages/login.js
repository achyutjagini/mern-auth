import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1 class="login_h1">Log in</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input class="login_input" type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input class="login_input" type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button class="login_button">Log in</button>

                    <p class="p_login">Not a member yet? <Link to="/sign-up" class="link_login">Sign Up</Link></p>

                </form>
            </div>
        </div>

    )
}

export default Login
