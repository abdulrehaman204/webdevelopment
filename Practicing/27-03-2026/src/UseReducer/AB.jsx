import React, { useReducer } from 'react'

let data = {
    count : 0
}

function reducer(state=data,action){
     switch(action.type){
        case "a" :
            return {...state,
                count : state.count +1
            } 
        case "b" :
            return {...state,
                count : state.count-1
            }
        default :
          return state
     }
}


function AB() {
    let[a,seta]=useReducer(reducer,data)
  return (
    <div>
      <h1>count :{a.count}</h1>
      <button onClick={()=>seta({type : "a"})}>Increment</button>
      <button onClick={()=>seta({type : "b"})}>Decrement</button>
    </div>
  )
}

export default AB
