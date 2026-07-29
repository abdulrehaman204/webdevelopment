import React, { useState } from 'react'
import Child from './Child'

function Parent2() {
    const[message,setmessage]=useState("")

    const recievemessage=(msg)=>{
        setmessage(msg)
    }
  return (
    <div>
       <h1>Parent Component</h1>
      <h3>Message: {message}</h3>
      <Child sendmessage={recievemessage}/>
    </div>
  )
}

export default Parent2
