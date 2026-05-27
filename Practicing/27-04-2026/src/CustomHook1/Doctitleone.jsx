import React, { useEffect, useState } from 'react'
import useDocument from './Document'

function Doctitleone() {
    const [count, setcount]=useState(0)
     useDocument(count)
  return (
    <div>
      <button onClick={()=>setcount(count + 1)}>Click - {count}</button>
    </div>
  )
}

export default Doctitleone
