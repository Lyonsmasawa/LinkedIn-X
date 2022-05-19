import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = () => {
        if (!name) {
            return alert("please enter a full name")   
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profile,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profile,
                }))
            })
        }).catch(error => alert(error))
    }

  return (
    <div className='login'>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="" />

        <form action="">
            <input type="text" placeholder='Full name (required if registering)' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Profile picture (optional)' value={profile} onChange={e => setProfile(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>

        <p>Not a member? 
            <span className='login__register' onClick={register}> Register now</span>
        </p>
    </div>
  )
}

export default Login