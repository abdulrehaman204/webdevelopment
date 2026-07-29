import React from 'react'
import Students from './Students'

function Parent() {
  return (
    <div>
    <h1>Parent Component</h1>
      <Students name="Abdul" course="JavaScript" />
    </div>
  )
}

export default Parent
