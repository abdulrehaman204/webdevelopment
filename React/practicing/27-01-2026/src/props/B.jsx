import React from 'react'

function B(p) {
    console.log(p)
  return (
    <div>
      <h1>This is B component : {p.value}</h1>
    </div>
  )
}

export default B
