import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "./productsSlice.js";

function Ap() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  const addNewProduct = () => {
    dispatch(
      addProduct({
        id: Date.now(),
        name: "Product " + products.length,
      })
    );
  };

  return (
    <div>
      <h2>Products</h2>

      <button onClick={addNewProduct}>Add Product</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => dispatch(deleteProduct(product.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ap;
