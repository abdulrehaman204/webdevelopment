import React from 'react'


function Resuable({text,onClick}) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Resuable
