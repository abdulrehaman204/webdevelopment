import React, { useOptimistic, useState } from 'react'

function C() {
    const[show,setshow]=useState(false)
    const toggledetails = ()=>{
        setshow(!show)
    };
  return (
    <div>
      <button onClick={toggledetails}>
      { show ? "Hide Details" : "show Details" }
      </button>
      {show && (
      <p>
        This is the details paragraph. It appears when you click "Show Details"
          and disappears when you click "Hide Details".
      </p>
      )}
    </div>
  )
}

export default C
