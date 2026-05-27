import React, { useState } from 'react'

function Input() {
    const[text,settext]=useState("")
  return (
    <div>
      <input value={text} onChange={(e)=>settext(e.target.value)}></input>
      <p>{text}</p>
    </div>
  )
}

export default Input
