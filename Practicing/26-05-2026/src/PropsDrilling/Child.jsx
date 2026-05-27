import React from 'react'
import Grandchild from './Grandchild'

function Child({value}) {
  return (
    <div>
      <Grandchild value={value}/>
    </div>
  )
}

export default Child
