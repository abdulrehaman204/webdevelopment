import React from 'react'

function Product() {
       const products = [
        {id:1,name:"mobile",price:20000},
        {id:2,name:"laptop",price:50000},
        {id:3,name:"headphones",price:2000}
    ]

    const addtocart =(product)=>{
        console.log("Add to cart :",product)
    }
  return (
    <div>
      <h1>Product List</h1>
      {products.map((e)=>(
        <div key={e.id}>
             <p><strong>{e.name}</strong></p>
          <p>Price: ₹{e.price}</p>
          <button onClick={()=>addtocart(e)}>Add to cart</button>
            </div>
      ))}
    </div>
  )
}

export default Product
