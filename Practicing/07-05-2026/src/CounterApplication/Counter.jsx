import React, { useState } from 'react'

function Counter() {
    const max=10;
    const[count,setcount]=useState(0)

    const increment =()=>{
        if(count<max){
        setcount(count+1)
        }
    }

    const decrement =()=>{
        if(count>0){
            setcount(count-1)
        }
    }

    const reset =()=>{
        setcount(0)
    }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment} disabled={count>=max}>Increment</button>
      <button onClick={decrement} disabled={count<=0}>Decrement</button>
      <button onClick={reset}>Reset</button>
        <p>Min: 0 | Max: {max}</p>
    </div>
  )
}

export default Counter
