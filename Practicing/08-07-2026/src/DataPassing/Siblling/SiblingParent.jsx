import React, { useState } from 'react'
import InputBox from './InputBox'
import DisplayBox from './DisplayBox'

function SiblingParent() {
    const[text,settext]=useState("")
  return (
    <div  style={{ padding: "20px", textAlign: "center" }}>
     <h1>Sibling Communication</h1>
      <InputBox text={text} settext={settext}/>
      <DisplayBox text={text}/>
    </div>
  )
}

export default SiblingParent
