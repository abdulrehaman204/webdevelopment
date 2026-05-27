import React, { useEffect } from 'react'

function Signup() {
  function hello(){
    console.log("Function called")
}

  useEffect(()=>{
    console.log("Signup Page")
    hello()
  },[])
  return (
    <div>
      <h1>
        signup
      </h1>
    </div>
  )
}

export default Signup
