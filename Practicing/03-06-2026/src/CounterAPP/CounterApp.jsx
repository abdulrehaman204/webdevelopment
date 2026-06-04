import React, { useState } from 'react'

function CounterApp() {
    const[count,setcount]=useState(0)
    const Max_count = 10;

    const increment = ()=>{
        if(count<Max_count){
            setcount(count+1)
        }
   }

    const decrement = ()=>{
        if(count>0){
            setcount(count-1)
        }
    }

    const reset = ()=>{
        setcount(0)
    }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment} disabled={count===Max_count}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {count===Max_count && (<p style={{ color: "green" }}>Maximum limit reached</p>)}
    </div>
  )
}

export default CounterApp
