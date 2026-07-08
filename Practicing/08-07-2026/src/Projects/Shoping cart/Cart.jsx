function Cart({cart,removeFromCart}) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,0);

  return (
    <div>

      <h2>Cart</h2>
      {
        cart.length === 0 ?
        <p>Cart is empty</p>
        :
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name} - ₹{item.price}</p>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>

          </div>

        ))

      }


      <h3>
        Total: ₹{total}
      </h3>


    </div>

  );
}


export default Cart;