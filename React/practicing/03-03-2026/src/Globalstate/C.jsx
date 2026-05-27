import React, { useContext } from 'react'
import { context } from './A'

function C() {
   let{a,seta}=useContext(context)
  return (
    <div>
      C
      <h1>{a}</h1>
    </div>
  )
}

export default C
