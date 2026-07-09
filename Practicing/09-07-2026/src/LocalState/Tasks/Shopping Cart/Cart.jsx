import React, { useReducer, useState } from 'react'

const products = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Banana", price: 15 },
  { id: 3, name: "Orange", price: 25 },
];

function reducer(state,action){
    switch(action.type){
        case "ADD":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }: item);
      }
      return [...state, { ...action.payload, quantity: 1 }];

       case "REMOVE":
      return state.filter(item => item.id !== action.payload);

      case "INC":
      return state.map(item =>item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }: item);

      case "DEC":
      return state.map(item =>item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }: item)
        .filter(item => item.quantity > 0);

      default :
      return state;
    }
}

function Cart() {
  const [cart, dispatch] = useReducer(reducer, []);
  const [search, setSearch] = useState("");

   const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div>
       <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Products</h2>

      {filtered.map(product => (
        <div key={product.id}>
          {product.name} ₹{product.price}

          <button onClick={() =>dispatch({type: "ADD",payload: product,})}> Add </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name}

          {item.quantity}

          <button onClick={() => dispatch({ type: "INC", payload: item.id })}> + </button>

          <button onClick={() => dispatch({ type: "DEC", payload: item.id })}> - </button>

          <button onClick={() => dispatch({type: "REMOVE",payload: item.id,})}>Delete</button>
        </div>
      ))}

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  )
}

export default Cart
