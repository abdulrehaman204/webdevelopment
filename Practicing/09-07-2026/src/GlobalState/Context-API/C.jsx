import React, { useContext, useState } from 'react'
import { MyContext } from './A'

function C() {
    const{a,seta}=useContext(MyContext)
  return (
    <div>
      <h1>Count value is {a}</h1>
      <button onClick={()=>seta(a+1)}>Increment</button>
    </div>
  )
}

export default C