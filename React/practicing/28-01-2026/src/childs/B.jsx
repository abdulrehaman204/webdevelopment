import React, { useState } from 'react'
import C from './C'

function B({value}) {
    console.log(value)
    let [a,seta]=useState(100)
  return (
    <div>
      <h1>This B component {a}</h1> 
       <C/>
    </div>
  )
}

export default B
