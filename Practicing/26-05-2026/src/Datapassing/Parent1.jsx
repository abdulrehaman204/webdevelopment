import React from 'react'
import Child1 from './Child1'

function Parent1() {
  return (
    <div>
        <h1>This is parent component</h1>
      <Child1 message="Hello! iam from parent"/>
    </div>
  )
}

export default Parent1
