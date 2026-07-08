import React from 'react'
import Sidebar from './Sidebar'

function Dashboard({user}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Dashboard</h2>
      <Sidebar user={user}/>
    </div>
  )
}

export default Dashboard
