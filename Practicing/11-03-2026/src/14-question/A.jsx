import React, { useState } from "react";

const A = () => {
  const [search, setSearch] = useState("");

  const users = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Williams",
    "Emma Watson",
    "Frank Miller",
    "Grace Lee"
  ];

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
};

export default A;