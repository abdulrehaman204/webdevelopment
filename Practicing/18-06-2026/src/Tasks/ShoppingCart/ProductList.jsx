import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from './CartSlice';

function ProductList() {
    const dispatch=useDispatch()
    const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
    },
    {
      id: 3,
      name: "Mouse",
      price: 50,
    },
  ];
  return (
    <div>
      <h1>Products</h1>
      {products.map((product)=>(
        <div key={product.id}>
            {product.name} - ${product.price}
            <button onClick={()=>dispatch(addtocart(product))}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
