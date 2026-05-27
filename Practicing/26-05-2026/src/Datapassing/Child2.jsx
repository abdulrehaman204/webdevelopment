import React from 'react'

function Child2({sendmessage}) {
  return (
    <div>
    <button onClick={()=>sendmessage("Data from child")}>send data to parent</button>
    </div>
  )
}

export default Child2
