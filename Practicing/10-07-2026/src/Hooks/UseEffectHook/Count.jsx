import React, { useState } from 'react'
import { useEffect } from 'react'

function Count() {
    const[count,setcount]=useState(0)
   
    useEffect(()=>{
      console.log("count mounted")
    },[])

    useEffect(()=>{
       console.log("Count updated:",count)
    },[count])

  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
    </div>
  )
}

export default Count
