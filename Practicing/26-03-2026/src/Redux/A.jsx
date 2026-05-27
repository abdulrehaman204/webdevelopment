import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


function A() {
  let data=useSelector((state)=>{
    return state
  })
  let d=useDispatch()
  return (
    <div>
      <h1>{data.sum}</h1>
      <button onClick={()=>d({type :"a"})}>Increment</button>
      <button onClick={()=>d({type :"b"})}>Decrement</button>
    </div>
  )
}

export default A
