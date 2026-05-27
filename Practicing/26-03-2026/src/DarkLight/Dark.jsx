import React, { useState } from 'react'

function Dark() {
    const[dark,setdark]=useState(false)
  return (
    <div style={{background : dark ? "#333" : "#fff",color : dark ? "#fff" : "#000"}}>
      <button onClick={()=>setdark(!dark)}>Toggle Theme</button>
      <p>Hello World</p>
    </div>
  )
}

export default Dark
