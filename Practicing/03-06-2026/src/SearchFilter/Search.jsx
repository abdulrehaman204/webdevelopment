import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const users = [
    "Abdul Rehaman",
    "Prasanth",
    "Vamsi",
    "Ravi kishore",
    "Razzak",
    "Rehan",
  ];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search Users</h1>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
}

export default Search;
