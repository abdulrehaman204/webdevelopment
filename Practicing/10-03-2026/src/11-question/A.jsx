import React, { useState } from 'react'

function A() {
    let[count,setcount]=useState(0);

    let Increment =()=>{
        setcount(count+1);
    }

    let Decrement =()=>{
        if(count>0){
            setcount(count-1)
        }
    }

    let reset =()=>{
        setcount(0)
    }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={Increment}>Increment</button>
      
      <button onClick={Decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default A
