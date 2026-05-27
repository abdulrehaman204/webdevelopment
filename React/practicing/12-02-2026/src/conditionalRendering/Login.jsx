import React from 'react'

function Login({value}) {
    let handlesubmit=(e)=>{
        e.preventDefault()
        value()
    }
  return (
    <div>
      <h1>
        Login
      </h1>
      <form onSubmit={handlesubmit}>
      <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login
