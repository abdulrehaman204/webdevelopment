import React from 'react'
import D from './D'

function B({value}) {
  console.log(value)
  return (
    <div>
      B
      <D value={value}/>
    </div>
  )
}

export default B

