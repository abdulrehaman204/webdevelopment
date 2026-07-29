import React from 'react'

function Sender({sendmessage}) {
  return (
    <div>
      <button onClick={() => sendmessage("Welcome to React!")}>
      Send Message
    </button>
    </div>
  )
}

export default Sender
