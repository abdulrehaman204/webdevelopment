import React from 'react'

function Cart() {

  const cartItems = 3;
  const totalAmount = 4200;
  const isLoggedIn = false;

  return (
    <div>
       <h1>Shopping Cart</h1>
       {cartItems === 0 ? (
        <h2>Your cart is empty</h2>
       ): (
         <>
          <h2>Items: {cartItems}</h2>
          <h3>Total: ₹{totalAmount}</h3>

          {totalAmount >= 5000 ? (
            <p>🎉 You get Free Shipping!</p>
          ) : (
            <p>
              Add ₹{5000 - totalAmount} more for Free Shipping.
            </p>
          )}

          {isLoggedIn ? (
            <button>Proceed to Checkout</button>
          ) : (
            <button>Login to Checkout</button>
          )}
        </>
       )}
    </div>
  )
}

export default Cart
