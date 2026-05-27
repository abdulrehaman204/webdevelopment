import React, { useState } from 'react'

function Form() {
    const[form,setform]=useState({name : "", email : ""})
    const handlesubmit =(e)=>{
     e.preventDefault()
     console.log(form)
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input 
        placeholder='name'
        onChange={(e)=>setform({...form,name:e.target.value})}
        />
        <input
        placeholder='email'
        onChange={(e)=>setform({...form,email:e.target.value})}
        />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
