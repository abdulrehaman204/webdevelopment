import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
      <h1>This is Parent Component</h1>
      <Child message="Hello from the parent"/>
    </div>
  )
}

export default Parent
