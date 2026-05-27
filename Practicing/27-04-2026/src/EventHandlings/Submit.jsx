import React from 'react'

function Submit() {
    const handlesubmit=(e)=>{
        e.preventDefault()
        alert("Form submitted")
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Submit
