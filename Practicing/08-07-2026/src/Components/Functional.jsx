import React, { useState } from 'react'

function Functional(props) {
    let[count,setcount]=useState(0)
  return (
    <div>
      <h1>Hello , MR. {props.name}</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default Functional
