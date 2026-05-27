import React, { useState } from 'react'

function Counter() {
    const[count,setcount]=useState(0)
    const increment =()=>{
         setcount(count+1)
    }
    const decrement = ()=>{
        if(count>0){
            setcount(count-1)
        }
    }
    const reset=()=>{
        setcount(0)
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
