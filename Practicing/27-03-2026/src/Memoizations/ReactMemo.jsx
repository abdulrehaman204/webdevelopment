import React from 'react'
import { useState } from 'react'

const C = React.memo(()=>{
    console.log("child render")
    return <h1>iam child component</h1>
})



function ReactMemo() {
    const[a,seta]=useState(0)
  return (
    <div>
      <h1>Count : {a}</h1>
      <button onClick={()=>seta(a+1)}>Increase</button>
      <C/>
    </div>
  )
}

export default ReactMemo
