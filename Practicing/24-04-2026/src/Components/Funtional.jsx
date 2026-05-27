import React, { useState } from 'react'

function Funtional(props) {
    let[count,setcount]=useState(0)
  return (
    <div>
        <h1>Hello! {props.name}</h1>
      <h1>Count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default Funtional
