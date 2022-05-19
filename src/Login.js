import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="" />

        <form action="">
            <input type="text" placeholder='Full name (required if registering)' />
            <input type="text" placeholder='Profile picture (optional)' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
        </form>
    </div>
  )
}

export default Login