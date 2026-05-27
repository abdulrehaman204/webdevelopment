import React, { useState } from 'react'

function Change() {
    const[name,setname]=useState("")
  return (
    <div>
      <input type='text'
             value={name}
             onChange={(e)=>setname(e.target.value)}>
      </input>
      <h1>{name}</h1>
    </div>
  )
}

export default Change
