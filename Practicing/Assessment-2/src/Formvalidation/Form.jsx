import React, { useState } from 'react'

function Form() {
    const[form,setform]=useState({name:"",email:""})
    const[error,seterror]=useState(true)

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        e.seterror(err.message)

        if(error) return <p>Error:{error}</p>
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
        type="text"
        placeholder='enter your name'
        onChange={(e)=>setform({...form,name:e.target.value})}
        />
         <input
        type="email"
        placeholder='enter your email'
        onChange={(e)=>setform({...form,email:e.target.value})}
        />
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
