import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Ap() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addNewProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: 3,
        name: "Headphones",
        price: 200,
      },
    });
  };

  return (
    <div>
      <h2>Products</h2>

      <button onClick={addNewProduct}>Add Product</button>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: p,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Ap;
