import React, { useState } from 'react'

function C({value}) {
    console.log(value)
    let [a,seta]=useState(99)
  return (
    <div>
      <h1>This is c component {a}</h1>
    </div>
  )
}

export default C
