import React, { useState } from "react";

const items = ["Apple", "Banana", "Mango"];

function Search() {
  const [query, setQuery] = useState("");

  const filtered = items.filter((i) =>
    i.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search users</h1>

      <input
        type="text"
        placeholder="search name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length > 0 ? (
        filtered.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Search;
