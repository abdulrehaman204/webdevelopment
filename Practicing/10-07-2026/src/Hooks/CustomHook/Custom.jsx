import React from 'react'
import useCounter from './UseCounter'

function Custom() {
    const {count,increment,decrement}=useCounter(10)
  return (
    <div>
       <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Custom
