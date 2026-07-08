import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function A() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mouse",
      price: 1000
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000
    }
  ];


  const [cart, setCart] = useState([]);


  // Add product to cart
  const addToCart = (product) => {

    setCart([
      ...cart,
      product
    ]);

  };


  // Remove product from cart
  const removeFromCart = (id) => {

    setCart(
      cart.filter(item => item.id !== id)
    );

  };


  return (

    <div className="container">

      <h1>Shopping Cart</h1>


      <ProductList
        products={products}
        addToCart={addToCart}
      />


      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />


    </div>

  );
}

export default A;