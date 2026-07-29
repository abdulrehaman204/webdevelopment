import React, { useState } from 'react'

function Toggle() {
    const[isvisible,setisvisible]=useState(true)
  return (
    <div>
      {isvisible&&<h2>Hello! AbdulRehaman</h2>}
      <button onClick={()=>setisvisible(!isvisible)}>
          {isvisible ? "Hide" : "Show"} Message
      </button>
    </div>
  )
}

export default Toggle
