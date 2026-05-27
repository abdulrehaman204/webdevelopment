import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Reducer() {
    let selector=useSelector((state)=>state.count)
    let dispatch=useDispatch()
  return (
    <div>
      <h1>count : {selector}</h1>
      <button onClick={()=>dispatch({type : "increment"})}>increment</button>
      <button onClick={()=>dispatch({type : "decrement"})}>decrement</button>
    </div>
  )
}

export default Reducer
