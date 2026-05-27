import React, { useState } from "react";
import "./Users.css";

function Users() {
  const [user, setUser] = useState(null);

  const addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Abdul Rehaman",
        email: "Abdul@gmail.com",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

    const clearlist = () => {
    setUser([]);
  };

  return (
    <div className="container">
      <h2>Simple POST Method</h2>
      <button onClick={addUser}>Add User</button>
       <button onClick={clearlist}>Clear List</button>

      {user && (
        <div className="card">
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Users;