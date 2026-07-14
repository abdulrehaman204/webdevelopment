import React from 'react'
import Button from './A'

function Buttons() {
    const handleClick = ()=>{
        alert("Button Clicked")
    }
  return (
    <div>
      <h1>Resuable Buttons</h1>
      <Button type="primary" label="Submit" onClick={handleClick} />
      <Button type="secondary" label="Cancel" onClick={handleClick} />
      <Button type="danger" label="Delete" onClick={handleClick} />
    </div>
  )
}

export default Buttons
