import React, { useReducer } from 'react'

const initialstate={
    count : 0
}

function reducer(state,action){
    switch(action.type){
        case "ADD" :
        return { cart : state.cart + 1 }
        case "REMOVE" :
        return {  cart: Math.max(0, state.cart - 1), }
        case "CLEAR" :
        return { cart : 0}
        default :
        return state;
    }
}

function ShoppingCart() {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
       <h2>Items in Cart: {state.cart}</h2>

      <button onClick={() => dispatch({ type: "ADD" })}>
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "REMOVE" })}>
        Remove Item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Cart
      </button>
    </div>
  )
}

export default ShoppingCart
