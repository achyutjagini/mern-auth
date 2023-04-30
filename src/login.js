import React, { useState } from 'react'
import './login.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1>Login</h1>
                    </div>
                    <label>Enter Username</label>
                    <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    <label>Enter password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button>login</button>
                </form>
            </div>
        </div>

    )
}

export default Login
