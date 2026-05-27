import React from 'react'
import Parent from './Parent'

function Main() {
    const user = {name : "Abdul"}
  return (
    <div>
      <Parent value={user}/>
    </div>
  )
}

export default Main
