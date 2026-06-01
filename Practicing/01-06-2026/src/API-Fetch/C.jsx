import React, { useEffect, useState } from "react";

function C() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <h2>{e.name}</h2>
          <p>{e.email}</p>
          <p>{e.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default C;
