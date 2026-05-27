import React, { useEffect, useState } from 'react'

function Login({value}) {
  let[a,seta]=useState("")
  useEffect(()=>{
    console.log("Login Page")
  },[])
    let handlesubmit=(e)=>{
        // e.preventDefault()
        // value()
        console.log("login button clicked")
        console.log(e)
    }
    useEffect(()=>{
      console.log(a)
    },[a])
   function handlechange(j){
    console.log("handlechange is called")
    // console.log(j.target.value)
    seta(j.target.value)
   }

  return (
    <div>
      <h1>
        Login
      </h1>
      <input type='text' value={a} onChange={handlechange}></input>
      <form onSubmit={handlesubmit}>
      <button type='submit'>login</button>
      </form>
      <button onClick={handlesubmit}>Click this button</button>
    </div>
  )
}

export default Login
