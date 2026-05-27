import React from 'react'
import Child from './Child'

function Parent({value}) {
  return (
    <div>
      <Child value={value}/>
    </div>
  )
}

export default Parent
