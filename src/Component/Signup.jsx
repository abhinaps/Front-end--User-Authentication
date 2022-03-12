import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Signup = (props) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validname, setValidname] = useState(true)
  const [validemail, setValidemail] = useState(true)
  const [validpassword, setVaildpassword] = useState(true)

  

  const handleEmailChange = e =>{
    setEmail(e.target.value)
    setValidemail(true)
  }
  const handlePassChange = e => {
    setPassword(e.target.value)
    setVaildpassword(true)
  }
  const handleNameChange = e => {
    setName(e.target.value)
    setValidname(true)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (name === ""){
      setValidname(false)
    }
    if (email === ""){
      setValidemail(false)
    }
    if (password === ""){
      setVaildpassword(false)
    }
    if (name === "" || email === "" || password === ""){
      
    } else {
      axios.post("https://user-auth-apii.herokuapp.com/api/v1/register", {name, email, password})
      .then(response => {
        props.handleSigned(true)
        props.errorStatus(false)
        alert("Sign up successful. Please login")
        console.log(response)
      })
      .catch(error => {
        props.errorStatus(true)
        console.log(error)}) 
    }
  }
  

  


  return (
    <>
    <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input 
        type="text" 
        minLength="6"
        placeholder='Enter Name'
        className={!validname ? 'error' : ""}
        value={name} 
        onChange={handleNameChange} />
      </div>
      <div>
        <label>Email</label>
        <input 
        type="email" 
        placeholder='Enter Email'
        className={!validemail ? 'error' : ""}
        value={email} 
        onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password</label>
        <input 
        type="password"
        minLength="6" 
        placeholder='Enter Password'
        className={!validpassword ? 'error' : ""}
        value={password} 
        onChange={handlePassChange} />
      </div>
      <button type="submit">Sign up</button>
    </form>
    </>
  )
}


export default Signup
