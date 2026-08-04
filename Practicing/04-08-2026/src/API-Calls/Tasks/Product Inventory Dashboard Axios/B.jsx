import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function B() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [productRes, cartRes] = await Promise.all([
          axios.get("https://dummyjson.com/products"),
          axios.get("https://dummyjson.com/carts"),
        ]);

        const carts = cartRes.data.carts;

        const inventory = productRes.data.products.map((product) => {
          let totalSold = 0;

          carts.forEach((cart) => {
            cart.products.forEach((item) => {
              if (item.id === product.id) {
                totalSold += item.quantity;
              }
            });
          });

          return {
            ...product,
            totalSold,
            remaining: product.stock - totalSold,
          };
        });

        setProducts(inventory);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.totalSold - a.totalSold);
  }, [products, search]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          style={{
            color: product.remaining < 20 ? "red" : "black",
          }}
        >
          <h3>{product.title}</h3>
          <p>Stock: {product.stock}</p>
          <p>Sold: {product.totalSold}</p>
          <p>Remaining: {product.remaining}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}


export default B;