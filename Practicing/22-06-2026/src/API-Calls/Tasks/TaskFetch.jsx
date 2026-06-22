import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 5;

function TaskFetch() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts List</h2>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Data List */}
      {!loading && !error && (
        <>
          <ul>
            {currentItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.title}</strong>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span style={{ margin: "0 15px" }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskFetch;
