import React, { createContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import B from './B'
import C from './C'

export const context = createContext()

function AB() {
  const sum = useSelector((state) => state.sum)  
  const dispatch = useDispatch()

  const [a, seta] = useState(100)

  return (
    <div>
      <h1>data {sum}</h1>

      <button onClick={() => dispatch({ type: "Increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "Decrement" })}>
        Decrease
      </button>

      <context.Provider value={{ a, seta }}>
        <B />
        <C />
      </context.Provider>
    </div>
  )
}

export default AB
