import React, { useState } from 'react'

function A() {
    let [a,seta]=useState({
        name:"Abdul Rehaman",
        city : "Hyderabad"
    })
    console.log(a)
    let hello=()=>{
        seta({
        ...a,
        city:"banglore"
   })
 }
   
  return (
    <div>
      <h1>{a.name}</h1>
      <h1>{a.city}</h1>
      <button onClick={hello}>Click</button>
    </div>
  )
}

export default A
