import React, { useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Profile() {
  useEffect(()=>{
    console.log("Profile Page")
  },[])

    let[status,setstatus]=useState("new")
    let[loginin,setloginin]=useState(false)
    let[exist,setexist]=useState(true)
    let changelogin=()=>{
        setloginin(true)
    }
  return (
    <div> 
      {loginin ? <div>
        <h1>Profile</h1> 
      </div>: exist ? <Login value={changelogin}/> : <Signup/>}
    { loginin ? <button onClick={()=>setloginin(false)}>Logout</button> :
    exist ?  <div> 
           <p>if you are a new user then click signup ? </p>
      <button onMouseEnter={()=>setexist(false)}>signup</button>
      </div> :
       <div>
           <p>if you have existing account then click login ? </p>
      <button onClick={()=>setexist(true)}>Login</button>
      </div> }
    </div>
  )
}

export default Profile
