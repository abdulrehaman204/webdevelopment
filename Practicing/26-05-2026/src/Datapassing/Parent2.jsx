import React, { useState } from 'react'
import Child2 from './Child2'

function Parent2() {

    let[data,setdata]=useState("")

    const handledata =(data)=>{
        setdata(data)
    }
    
  return (
    <div>
      <h1>Parent recieved : {data}</h1>
      <Child2 sendmessage={handledata}/>
    </div>
  )
}

export default Parent2
