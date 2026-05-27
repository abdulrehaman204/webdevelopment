import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Smartphone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

function A() {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            width: "200px"
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default A;
