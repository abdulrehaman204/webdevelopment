import React, { useState } from "react";

const UserList = () => {
  const [search, setSearch] = useState("");

  const users = [
    "Abdul Rehaman",
    "Prasanth",
    "Sanjay",
    "Vamsi",
    "Ravi Kishore"
  ];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;