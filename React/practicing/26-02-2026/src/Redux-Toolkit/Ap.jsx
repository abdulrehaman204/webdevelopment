import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './counterslice'

function Ap() {
   let selector =useSelector((state)=>state.counter.value);
   let dispatch = useDispatch()
  return (
    <div>
        <h1>count : {selector}</h1>
      <button onClick={()=>dispatch(increment(5))}>increment</button>
      <button onClick={()=>dispatch(decrement(2))}>decrement</button>
    </div>
  )
}

export default Ap
