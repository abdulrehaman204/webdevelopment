import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Redux() {
    let count = useSelector((state)=>state.count)
    let dispatch = useDispatch()
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch({type:'Increment',payload : 10})}>Increment</button>
      <button onClick={()=>dispatch({type:'Decrement',payload : 5})}>Decrement</button>
    </div>
  )
}

export default Redux
