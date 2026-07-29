import React from 'react'
import ProductList from './ProductList'

function Product() {
    const products=[
    {
      id: 1,
      name: "Laptop",
      price: 900,
      category: "Electronics",
      stock: "Available"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      category: "Accessories",
      stock: "Out of Stock"
    }
    ]
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}

export default Product
