import React, { useState } from 'react'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {
        
    }

  return (
    <div className='login'>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="" />

        <form action="">
            <input type="text" placeholder='Full name (required if registering)' />
            <input type="text" placeholder='Profile picture (optional)' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>

        <p>Not a member? 
            <span className='login__register' onClick={register}> Register now</span>
        </p>
    </div>
  )
}

export default Login