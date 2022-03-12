import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  const [vaildPassword, setVaildPassword] = useState(true) 
  const [vaildEmail, setVaildEmail] = useState(true) 


  const handleEmailChange = e =>{
    setEmail(e.target.value)
    setVaildEmail(true)
  }
  const handlePassChange = e => {
    setPassword(e.target.value)
    setVaildPassword(true)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (password === ""){
      setVaildPassword(false)
    }
    if (email === ""){
      setVaildEmail(false)
    }
    if (email === "" || password === "" ){
      
    } else {
      axios.post("https://user-auth-apii.herokuapp.com/api/v1/login",{email, password})
      .then(response => {
        console.log(response)
        props.errorStatus(false)
        props.handleLogged(true)
      })
      .catch(e => {
        props.errorStatus(true)
        console.log(e)
      })
    }
  }
  
  return (
  <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input 
        type="email"
        placeholder='Enter Email' 
        className={!vaildEmail ? 'error' : ""}
        value={email} 
        onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password</label>
        <input 
        minLength="6"
        type="password" 
        placeholder='Enter Password'
        className={!vaildPassword ? 'error' : ""}
        value={password} 
        onChange={handlePassChange} />
      </div>
      <button type="submit">Login</button> 
    </form>
  </>
  )
}

export default Login
