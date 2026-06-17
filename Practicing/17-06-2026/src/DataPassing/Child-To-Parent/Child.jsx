import React from 'react'

function Child({sendmessage}) {
  return (
    <div>
      <button onClick={()=>sendmessage("Data From Child")}>Send Data to Parent</button>
    </div>
  )
}

export default Child
