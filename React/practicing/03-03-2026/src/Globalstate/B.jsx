import React, { useContext } from 'react'
import { context } from './A'

function B() {
   let{a,seta}=useContext(context)
  return (
    <div>
      B
      <h1>{a}</h1>
    </div>
  )
}

export default B
