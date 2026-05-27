import React, { useState } from 'react'

function D() {
    let[data,setdata]=useState(0);

    const increment =()=>{
        setdata(data+1)
    }

    const decrement =()=>{
        if(data>0){
            setdata(data-1)
        }
    }

    const reset =()=>{
     setdata(0)
    }
  return (
    <div>
        <h1>Count : {data}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default D


