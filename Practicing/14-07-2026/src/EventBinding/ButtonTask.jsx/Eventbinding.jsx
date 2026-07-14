import React, { useState } from 'react'

function Eventbinding() {
    const[message,setmessage]=useState("")
    const[buttontext,setbuttontext]=useState("Click Me")

    const handleclick = ()=>{
        setmessage("Button Clicked!")
        setbuttontext("Clicked")
    }
  return (
    <div>
      <button onClick={handleclick}>{buttontext}</button>
      <p>{message}</p>
    </div>
  )
}

export default Eventbinding
