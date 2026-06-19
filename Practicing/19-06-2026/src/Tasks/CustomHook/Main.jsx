import React from 'react'
import useToggle from './UseToggle'

function Main() {
    const[show,toggle]=useToggle()
  return (
    <div>
       <button onClick={toggle}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>React is awesome!</p>}
    </div>
  )
}

export default Main
