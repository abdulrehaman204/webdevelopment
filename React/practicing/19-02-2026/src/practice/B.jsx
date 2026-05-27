import React, { useCallback, useState } from 'react'
import C from './C'

function B() {
    const [count,setcount] = useState(0)

const handleclick  = useCallback(()=>{
    console.log("Button clicked")
});

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>setcount(count + 1)}>Increase count</button>
      <C value={handleclick}/>
    </div>
  )
}

export default B
