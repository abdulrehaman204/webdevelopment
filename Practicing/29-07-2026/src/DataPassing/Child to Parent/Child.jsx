import React from 'react'

function Child({sendmessage}) {
  return (
    <div>
        <button onClick={() => sendmessage("Hello from Child!")}>
      Send Message
    </button>
    </div>
  )
}

export default Child
