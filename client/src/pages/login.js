import React, { useState, useEffect, useContext } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import api from '../api/index'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // import toast object
import 'react-toastify/dist/ReactToastify.css';
import './popup.css';
import { AuthContext } from '../context/AuthContext';


const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPopup, setShowPopup] = useState(false)

    const { user, login, logout } = useContext(AuthContext);

    const loginUser = async (e) => {
        e.preventDefault()
        const name = username
        const pass = password
        const payload = { name, password }
        console.log(JSON.stringify(payload))

        await api.signin(JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            // setShowPopup(true)
            login({ username: name })

            toast.success('Login successful!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 500,
                hideProgressBar: true,
                closeButton: false,
                className: 'toast-success',
            });
            navigate('/dashboard')

        }).catch(err => {
            setError('Invalid username or password')
            console.log(err)
        }
        )
    }


    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <ToastContainer
                        autoClose={500}
                        hideProgressBar={true}
                        closeButton={false}
                        className="toast-container"
                    />

                    <div className='heading'>
                        <h1 class="login_h1">Log in</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input class="login_input" id="username" type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input class="login_input" type='password' id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button class="login_button" onClick={loginUser} >Log in</button>

                    <p class="p_login">Not a member yet? <Link to="/sign-up" class="link_login">Sign Up</Link></p>
                    {/*   <p>Current user: {user ? user.username : 'None'}</p> */}

                </form >
            </div >
        </div >

    )
}

export default Login
