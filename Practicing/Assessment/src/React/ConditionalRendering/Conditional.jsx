import React, { useState } from 'react'

function Conditional() {
    const[logedin,setlogedin]=useState(false)
  return (
    <div>
      <h1>{logedin ? "login" : "logout"}</h1>
      <button onClick={()=>setlogedin(!logedin)}>Toggle</button>
    </div>
  )
}

export default Conditional
