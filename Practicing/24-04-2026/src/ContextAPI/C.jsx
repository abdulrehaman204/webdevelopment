import React, { useContext } from 'react'
import { MyContext } from './A'; 

function C() {
  const { a, setA } = useContext(MyContext); 

  return (
    <div>
      <h1>Count value is {a}</h1>
      <button onClick={() => setA(a + 1)}>Increment</button>
    </div>
  )
}

export default C;
