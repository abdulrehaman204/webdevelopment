import React, { useState } from 'react'

function Hide() {
    const[show,setshow]=useState(true)
  return (
    <div>
      <button onClick={()=>setshow(!show)}>Toggle</button>
      {show&&<p>This is hidden text</p>}
    </div>
  )
}

export default Hide
