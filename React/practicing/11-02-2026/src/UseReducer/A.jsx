import React, { useReducer } from 'react'
import './AB.css'

let data = {
   count : 0
}

function countreducer(state,action){
   switch(action.type)
   {
       case 'a' :
        return {count : state.count +1}
       case 'b' :
        return { count: state.count > 0 ? state.count - 1 : 0 };
       case 'c' :
        return {count : 0}
       default :
        return state 
   }
}

function A() {
    let [a,seta]=useReducer(countreducer,data)
    console.log(a)

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Count : {a.count}</h1>
        <button className="btn increase" onClick={()=>seta({type : 'a'})}>Increase</button>
        <button className="btn decrease" onClick={()=>seta({type : 'b'})}>Decrease</button>
        <button className="btn reset" onClick={()=>seta({type : 'c'})}>Reset</button>
      </div>
    </div>
  )
}

export default A
