import React, { useState } from 'react'

function Color() {
    let[color,setcolor]=useState("white")
  return (
    <div
    style={{
        backgroundColor : color,
        height : "100vh",
        padding : "20px"
    }}>
        <h1>Change colour</h1>
        <button onClick={()=>setcolor("red")}>Red</button>
        <button onClick={()=>setcolor("blue")}>Blue</button>
        <button onClick={()=>setcolor("green")}>Greeen</button>
        <button onClick={()=>setcolor("orange")}>Orange</button>
    </div>
  )
}

export default Color
