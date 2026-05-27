import React, { useEffect, useState } from 'react'

function Timer() {
    const[secounds,setsecounds]=useState(0)

    useEffect(()=>{
      const time = setInterval(() => {
        setsecounds((prev)=>prev+1)
      }, 1000);
      return ()=>clearInterval(time)
    },[])
  return (
    <div>
      <h1>Timer : {secounds}</h1>
    </div>
  )
}

export default Timer
