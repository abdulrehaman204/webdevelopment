import React from 'react'

function Grandchild({value}) {
  return (
    <div>
      <h1>Hello! MR.{value.name}</h1>
    </div>
  )
}

export default Grandchild
