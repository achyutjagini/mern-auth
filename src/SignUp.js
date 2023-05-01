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
                        <h1>Sign Up</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button>Sign Up</button>


                </form>
            </div>
        </div>

    )
}

export default SignUp