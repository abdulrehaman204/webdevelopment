import React, { useState } from 'react'
import I from './I'

function H({value}) {
  return (
    <div>
      H
      <h1>The value of H in data is {value}</h1>
      <I value={value}/>
    </div>
  )
}

export default H


