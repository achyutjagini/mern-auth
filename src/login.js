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
                        <h1>Log in</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button>Log in</button>

                    <p>Not a member yet? Sign Up</p>

                </form>
            </div>
        </div>

    )
}

export default Login
