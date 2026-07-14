import React, { useState } from 'react'

function CounterMax() {
    const[count,setcount]=useState(0)

    const increment =()=>{
        if(count<10){
            setcount(count+1)
        }
    }

    const decrement =()=>{
        if(count>0){
            setcount(count-1)
        }
    }

    const reset = ()=>{
        setcount(0)
    }
  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      {count === 10 && <p>Maximum limit reached!</p>}
      {count === 0 && <p>Minimum limit reached!</p>}
    </div>
  )
}

export default CounterMax
