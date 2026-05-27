import React, { useEffect, useState } from 'react'

function Timer() {
    const[seconds,setseconds]=useState(0);
    useEffect(()=>{
    const interval = setInterval(() => {
        setseconds((prev)=>prev+1)
    }, 1000);
     return ()=> clearInterval(interval)
    },[])
  return (
    <div>
      <h1>seconds {seconds}</h1>
    </div>
  )
}

export default Timer
