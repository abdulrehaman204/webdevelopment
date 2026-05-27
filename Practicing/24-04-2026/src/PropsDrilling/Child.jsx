import React from 'react'
import Grandchild from './Grandchild'

function Child({user}) {
  return (
    <div>
      <Grandchild user={user}/>
    </div>
  )
}

export default Child
