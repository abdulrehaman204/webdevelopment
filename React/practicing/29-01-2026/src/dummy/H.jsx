import React, { useState } from 'react'
import I from './I'

function H() {
  let [a,seta]=useState(10)
  return (
    <div>
      H
      <h1>The value of H is {a}</h1>
      <I/>
    </div>
  )
}

export default H
