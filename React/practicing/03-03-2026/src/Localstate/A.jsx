import React, { useState } from 'react'

function A() {
    let[a,seta]=useState({
        name : "Abdul Rehaman",
        city : "Hyderabad"
    })

    console.log(a)

    const Hello = () =>{
        seta({
             ...a,
            city : "Banglore"
        })
    }

  return (
    <div>
      <h1>{a.name}</h1>
      <h1>{a.city}</h1>
      <button onClick={Hello}>Click Me</button>
    </div>
  )
}

export default A
