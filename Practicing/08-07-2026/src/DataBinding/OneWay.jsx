import React, { useState } from 'react'

function OneWay() {
    const[name,setname]=useState("Abdul")
  return (
    <div>
      <h1>Hello! Mr.{name}</h1>
    </div>
  )
}

export default OneWay