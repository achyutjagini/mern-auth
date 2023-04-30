import React, { useState } from 'react'
import './login.css'


const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1>Sign up</h1>
                    </div>
                    <label>Enter Username</label>
                    <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    <label>Enter password</label>
                    <input type='text' onChange={(e) => setPassword(e.target.value)}></input>
                    <button >Sign up</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp