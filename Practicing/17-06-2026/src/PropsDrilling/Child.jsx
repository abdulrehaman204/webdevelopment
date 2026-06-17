import React from 'react'
import Profile from './Profile'

function Child({user}) {
  return (
    <div>
      <Profile user={user}/>
    </div>
  )
}

export default Child
