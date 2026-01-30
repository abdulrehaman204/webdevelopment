import React, { useState } from 'react'

function I() {
    let [a,seta]=useState(10)
  return (
    <div>
      I
      <h1>The value of I is {a}</h1>
    </div>
  )
}

export default I
