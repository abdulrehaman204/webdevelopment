import React from 'react'

function Click() {
    const handleclick=()=>{
       alert("Button clicked")
    }
  return (
    <div>
      <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default Click
