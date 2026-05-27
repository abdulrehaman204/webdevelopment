import React from 'react'
import Resuable from './Resuable'

function Button() {
  return (
    <div>
      <button text="Click Me" onClick={()=>alert("clicked")}></button>
    </div>
  )
}

export default Button
