import React from 'react'

function ChildA({setmessage}) {
  return (
    <div>
      <button onClick={()=>setmessage("Hello from ChildA")}>Send</button>
    </div>
  )
}

export default ChildA
