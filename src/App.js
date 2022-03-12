import './App.css';
import { useEffect, useState } from 'react';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Welcome from './Component/Welcome';


const BaseURL = "https://user-auth-apii.herokuapp.com/api/v1"
const SIGNUP = "/register"
const LOGIN = "/login"


function App() {
  const [isSignup, setIsSignup] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState("")
 

  return (
    <div className="App">
      
      {isSignup && !isLoggedin && 
      <>
        <Login errorStatus={setError} handleName={setName} handleLogged={setIsLoggedin} />
        {error && <p>Something went wrong. Please try again</p>}
        <div>
        <h3>Not a member?</h3>
        <button 
        className='mbutton' 
        onClick={()=>{
          setIsSignup(false)
          }}>
            Sign up
          </button></div>
      </>}
      {!isSignup && 
      <>
        <Signup errorStatus={setError} handleSigned={setIsSignup}   />
        {error && <p>Something went wrong. Please try again</p>}
        <div>
        <h3>Already a member?</h3>
        <button
        className='mbutton' 
        onClick={()=>{
          setIsSignup(true)
          setIsLoggedin(false)
          }}>
            Login
          </button>
          </div>
      </>}
      {isLoggedin &&
        <>
        <Welcome name={name} />
        </>
      }
      
    </div>
  );
}

export default App;
