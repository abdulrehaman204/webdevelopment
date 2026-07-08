import React from 'react'

function InputBox({text, settext}) {
    const handlechange = (event)=>{
        settext(event.target.value)
    }
  return (
    <div style={{ marginBottom: "20px" }}>
        <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handlechange}
      />
      
    </div>
  )
}

export default InputBox
