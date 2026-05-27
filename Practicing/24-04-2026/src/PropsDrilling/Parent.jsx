import React from 'react'
import Child from './Child'

function Parent({user}) {
  return (
    <div>
      <Child user={user}/>
    </div>
  )
}

export default Parent
