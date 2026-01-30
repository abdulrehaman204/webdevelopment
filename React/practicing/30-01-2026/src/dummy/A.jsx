import React, { useState } from 'react'
import B from './B'
import C from './C'

function A(props) {
  let[a,seta]=useState(100)
  return (
    <div>
      A
      <B value={a}/>
      <C value={a}/>
    </div>
  )
}

export default A
