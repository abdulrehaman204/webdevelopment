import React from 'react'

function EcommerceDashboard() {
  const isLoading = false;
  const isLoggedIn = true;
  const isPremium = true;
  const cartItems = 3;
  const wishlistItems = 2;
  const orderStatus = "shipped";

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!isLoggedIn) {
    return <h2>Please Login</h2>;
  }

  return (
    <div>
      <h1>Welcome User</h1>

      {isPremium && <h3>⭐ Premium Member</h3>}

      <hr />

      {cartItems > 0 ? (
        <h3>Cart: {cartItems} items</h3>
      ) : (
        <h3>Your cart is empty</h3>
      )}

      {wishlistItems > 0 && (
        <h3>Wishlist: {wishlistItems} items</h3>
      )}

      <hr />

      {orderStatus === "pending" ? (
        <h3>📦 Order Received</h3>
      ) : orderStatus === "shipped" ? (
        <h3>🚚 Your Order is on the way</h3>
      ) : (
        <h3>✅ Order Delivered</h3>
      )}

      <hr />

      {cartItems > 0 && (
        <button>Checkout</button>
      )}

      {orderStatus === "delivered" && (
        <button>Leave Review</button>
      )}
    </div>
  );
}

export default EcommerceDashboard;
