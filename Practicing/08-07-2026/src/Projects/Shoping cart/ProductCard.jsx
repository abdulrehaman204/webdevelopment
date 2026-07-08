function ProductCard({product,addToCart}) {

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>Add Cart</button>

    </div>

  );
}


export default ProductCard;