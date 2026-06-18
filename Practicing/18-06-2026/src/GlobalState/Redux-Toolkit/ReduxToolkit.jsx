import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './Slice'

function ReduxToolkit() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default ReduxToolkit
