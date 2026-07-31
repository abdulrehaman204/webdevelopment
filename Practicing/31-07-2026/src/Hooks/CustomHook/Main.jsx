import React from 'react'
import useOnlineStatus from './useOnlineStatus'

function Main() {
    const isOnline = useOnlineStatus()
  return (
    <div style={{padding:"20px"}}>
       <h1>Network Status</h1>

      {isOnline ? (
        <h2 style={{ color: "green" }}>
          🟢 You are Online
        </h2>
      ) : (
        <h2 style={{ color: "red" }}>
          🔴 You are Offline
        </h2>
      )}
    </div>
  )
}

export default Main
