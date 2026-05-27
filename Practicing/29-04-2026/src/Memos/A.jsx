import React, { useState, useCallback, useMemo } from "react";

/* ---------------- PRODUCT CARD ---------------- */
// React.memo prevents re-render if props don't change
const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log("Rendering ProductCard:", product.name);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
});

/* ---------------- CART ITEM ---------------- */
const CartItem = React.memo(({ item }) => {
  console.log("Rendering CartItem:", item.name);

  return (
    <li>
      {item.name} - ₹{item.price}
    </li>
  );
});

function Shop() {
  const [cart, setCart] = useState([]);

  const products = useMemo(() => {
    // useMemo prevents recreation of this array on every render
    // (important when data is heavy or fetched)
    return [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 20000 },
      { id: 3, name: "Headphones", price: 2000 }
    ];
  }, []);

  /* useCallback prevents function recreation on every render */
  const handleAddToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const totalPrice = useMemo(() => {
    // useMemo avoids recalculating total on unrelated re-renders
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div>
      <h2>Products</h2>

      {/* Product List */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}

      {/* Cart Section */}
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>

      {/* useMemo optimized value */}
      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Shop;