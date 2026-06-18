import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removefromcart } from './CartSlice';

function Cart() {
    const dispatch = useDispatch()
    const items = useSelector((state)=>state.cart.items)
     const total = items.reduce(
    (sum, item) => sum + item.price, 0 );
  return (
    <div>
       <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() =>dispatch(removefromcart(item.id))}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart
