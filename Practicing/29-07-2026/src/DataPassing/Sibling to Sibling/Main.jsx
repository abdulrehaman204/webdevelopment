import React, { useState } from 'react'
import Sender from './Sender'
import Reciever from './Reciever'

function Main() {
    const[message,setmessage]=useState("")

    const handlemessage=(msg)=>{
        setmessage(msg)
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <Sender sendmessage={handlemessage}/>
      <Reciever message={message}/>
    </div>
  )
}

export default Main
