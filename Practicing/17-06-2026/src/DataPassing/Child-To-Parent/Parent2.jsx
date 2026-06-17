import React, { useState } from 'react'
import Child from './Child'

function Parent2() {
    let[data,setdata]=useState("")

   const handleclick = (data)=>{
    setdata(data)
   }
  return (
    <div>
      <h1>Parent recieved: {data}</h1>
      <Child sendmessage={handleclick}/>
    </div>
  )
}

export default Parent2

