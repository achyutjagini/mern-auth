import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import api from '../api/index'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async () => {
        const name = username
        const password = password
        const payload = { name, password }

        await api.signup(payload).then(res => {
            window.alert(`signup successfull`)
            navigate('/login')
        }).catch(err =>
            console.log(err)
        )
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