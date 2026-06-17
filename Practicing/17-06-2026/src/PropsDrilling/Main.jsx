import React from 'react'
import Child from './Child'

function Main() {
    let user = "AbdulRehaman"
  return (
    <div>
      <Child user={user}/>
    </div>
  )
}

export default Main
