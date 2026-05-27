import React, { useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const clearlist = () => {
    setUsers([]);
  };

  return (
    <div className="container">
      <h2>Users List</h2>

      <button onClick={fetchUsers}>Fetch Users</button>

      <button onClick={clearlist}>Clear List</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {users.map((user) => (
        <div key={user.id} className="card">
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;