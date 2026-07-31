
import React, { useCallback, useMemo, useState } from 'react'

const CD =React.memo( ({value}) =>{
    console.log("child render")
    return <button onClick={value}>Child Button</button>
})

function Usecallback() {
    const[count,setcount]=useState(0)
    const[age,setage]=useState(10)

    const D = useMemo(()=>{
        console.log("calculating")
        return age * 2;
    },[age])

    let handleClick = useCallback(()=>{
      console.log("child clicked")
    },[])

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increase</button>
      <CD value={handleClick}/>
      <h1>Age : {D}</h1>
      <button onClick={()=>setage(age+1)}>Age Increase</button>
    </div>
  )
}

export default Usecallback