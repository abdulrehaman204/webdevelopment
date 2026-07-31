import React, { useState } from 'react'

const A =()=>{
    console.log("child render")
    return <h1>Iam child component</h1>
}

function Reactmemo() {
    const[a,seta]=useState(0)
  return (
    <div>
      <h1>Count : {a}</h1>
      <button onClick={()=>seta(a+1)}>Increase</button>
      <A/>
    </div>
  )
}

export default Reactmemo;