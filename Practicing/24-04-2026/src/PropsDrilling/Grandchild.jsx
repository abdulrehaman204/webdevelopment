import React from 'react'

function Grandchild({user}) {
  return (
    <div>
      <h1>Hello! Mr{user.name}</h1>
    </div>
  )
}

export default Grandchild
