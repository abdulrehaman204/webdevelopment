import { useState, useEffect } from "react";

function Search() {
  const users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "John",
    "Sophia"
  ];

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(result);
  }, [search]);

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
