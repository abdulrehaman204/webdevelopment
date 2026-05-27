import React, { useState } from 'react'

function Counter() {
    const[data,setdata]=useState(0)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=> setdata(data+1)}>Increment</button>
       <button onClick={()=> setdata(Math.max(0,data-1))}>Decrement</button>
    </div>
  )
}

export default Counter
