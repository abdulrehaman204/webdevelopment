import React, { useState } from 'react'

function Toggle() {
    const[show,setshow]=useState(false)
  return (
    <div>
      <button onClick={()=>setshow(!show)}>Toggle</button>
      {show && <p>Hello AbdulRehaman</p>}
    </div>
  )
}

export default Toggle
