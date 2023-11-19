import './AuthForm.css'
import { useState } from 'react'

function AuthForm(props) {
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const [ insideEmail, setInsideEmail ] = useState(false)
const [ insidePassword, setInsidePassword ] = useState(false)
const [ emailError, setEmailError ] = useState(true)
const [ passwordError, setPasswordError ] = useState(true)

const emailHandler = (e) => {
    setEmail(e.target.value)
    const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!reg.test(String(e.target.value).toLowerCase())) {
        setEmailError(true)
    } else {
        setEmailError(false)
    }
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(!e.target.value || e.target.value.length <= 3) {
        setPasswordError(true)
    } else {
        setPasswordError(false)
    }
}

const blurHandler = (event) => {
    switch(event.target.id) {
        case 'email':
            setInsideEmail(true)
        break
        case 'password':
            setInsidePassword(true)
        break
    }
}

const submitHandler = (event) => {
    event.preventDefault()
    if (!passwordError && !emailError) {
      props.onLogin(email, password)
    }
  }

    return(
        <form onSubmit={submitHandler}>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <div>
        {(insideEmail && emailError) && <p className='error'>!</p>}
        <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="text" id="email" placeholder="example@gmail.com"/>    
        </div>
        <label htmlFor="password">Password</label>
        <div>
        {(insidePassword && passwordError) && <p className='error'>!</p>}
        <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" id="password" placeholder="*****"/>
        </div>
        <button type="submit">Log In</button>
        <p>Forgot Password?</p>
        </form>
    )
}

export default AuthForm