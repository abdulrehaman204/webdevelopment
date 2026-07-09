import React, { useReducer } from 'react'

let data = {
    count : 0
}

function countreducer(state,action){
    switch(action.type){
        case 'a':
            return {count : state.count+1}
        case 'b':
            return {count : state.count>0 ? state.count-1 : 0}
        case 'c':
            return {count : 0}
        default :
            return state
    }
}

function UseReducer() {
    const[a,seta]=useReducer(countreducer,data)
    console.log(a)
  return (
    <div>
      <h1>Count : {a.count}</h1>
      <button onClick={()=>seta({type:'a'})}>Increment</button>
       <button onClick={()=>seta({type:'b'})}>Decrement</button>
        <button onClick={()=>seta({type:'c'})}>Reset</button>
    </div>
  )
}

export default UseReducer
