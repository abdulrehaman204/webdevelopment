import React, { useState } from 'react'

function Oneway() {
    const[name,setname]=useState("Abdul")
  return (
    <div>
      <h1>Hello! Mr.{name}</h1>
    </div>
  )
}

export default Oneway
