import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
      <h1>Hello! This is Parent component</h1>
      <Child message="Hello! iam from parent"/>
    </div>
  )
}

export default Parent
