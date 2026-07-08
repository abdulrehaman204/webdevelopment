import React from 'react'
import UserCard from './UserCard'

function Sidebar({user}) {
  return (
    <div style={{ marginTop: "20px" }}>
       <h3>Sidebar</h3>
      <UserCard user={user} />
    </div>
  )
}

export default Sidebar
