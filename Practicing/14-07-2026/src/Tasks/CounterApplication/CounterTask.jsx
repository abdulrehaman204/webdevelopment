import React, { useState } from 'react'

function CounterTask() {
    const[count,setcount]=useState(0)

    const increment = ()=>{
        setcount(count+1)
    }

    const decrement = ()=>{
        if(count>=1){
            setcount(count-1)
        }
    }

    const reset = ()=>{
        setcount(0)
    }

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTask
