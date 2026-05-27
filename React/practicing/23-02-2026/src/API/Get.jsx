import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const handleclick=() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearlist = ()=>{
      setUsers([])
  }

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleclick}>Open the list</button>
      <button onClick={clearlist}>Clear the list</button>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;