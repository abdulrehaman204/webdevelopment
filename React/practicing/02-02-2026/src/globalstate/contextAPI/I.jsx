import React, { useContext, useState } from 'react'
import { context } from './A'


function I() {
  // console.log(context)
  let {a,seta}=useContext(context)
  // console.log(d)
  return (
    <div>
      I
      <h1>The value of I is {a} 😄</h1>
      <button onClick={()=>{seta(a+1)}}>Click</button>
    </div>
  )
}

export default I
