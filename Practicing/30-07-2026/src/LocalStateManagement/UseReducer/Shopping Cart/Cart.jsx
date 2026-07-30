import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state,action.payload]

        case "remove":
            return  state.filter(
        (_, index) => index !== action.payload)

        default :
        return state
    }
}


function Cart() {
    const[cart,dispatch]=useReducer(reducer,[])

  return (
    <div>
      <button onClick={()=>dispatch({type:"add",payload:"laptop"})}>Add Laptop</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}

            <button onClick={() =>dispatch({type: "remove",payload: index,})}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
