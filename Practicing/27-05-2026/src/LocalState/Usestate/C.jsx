import React, { useState } from 'react'

function C() {
    let[count,setcount]=useState(0)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default C
