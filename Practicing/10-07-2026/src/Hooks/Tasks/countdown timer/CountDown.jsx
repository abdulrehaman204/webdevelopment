import React, { useEffect, useState } from 'react'

function CountDown() {
    const[time,settime]=useState(10)
    useEffect(()=>{
       if(time===0) return 
    const timer = setInterval(() => {
      settime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    },[time])

    const restart = () => {
    settime(10);
  };
  return (
    <div>
    <h2>{time === 0 ? "Time's Up!" : time}</h2>

      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default CountDown
