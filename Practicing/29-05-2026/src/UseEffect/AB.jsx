import React, { useEffect, useState } from 'react'

function AB() {
    const[count,setcount]=useState(0)

    useEffect(()=>{
    console.log("count mounted")
    },[])

    useEffect(()=>{
        console.log("count updated",count)
    },[count])

  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
    </div>
  )
}

export default AB
