import React, { useState } from 'react'

function Toggle() {
    const[show,setshow]=useState(false)

    const handletoggle = ()=>{
        setshow(!show)
    }

  return (
    <div>
      <h1>Toggle Component</h1>
      <button onClick={handletoggle}>
        {show?"Hide details":"Show details"}
      </button>
      {show&&(
        <p>This is the detail paragraph that can be shown or hidden.</p>
      )}
    </div>
  )
}

export default Toggle
