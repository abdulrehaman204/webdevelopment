import React from 'react'

function Product() {
    const products = [
        {id:1,name:"mobile",price:20000},
        {id:2,name:"laptop",price:50000},
        {id:3,name:"headphones",price:2000}
    ]

     const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product)=>(
        <div key={product.id}>
          <p><strong>{product.name}</strong></p>
          <p>Price: ₹{product.price}</p>
          <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product
