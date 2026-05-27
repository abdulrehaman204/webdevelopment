import React, { useState } from "react";
import "./Users.css";

function Users() {
  const [user, setUser] = useState(null);

  // POST - Create User
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
      .then((data) => setUser(data))
      .catch((error) => console.log("Error:", error));
  };

  // PUT - Update Entire User
  const updateUserPut = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: "Abdul Updated",
        email: "updated@gmail.com",
      }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("Error:", error));
  };

  // PATCH - Update Part of User
  const updateUserPatch = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "patched@gmail.com",
      }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("Error:", error));
  };

  const clearlist = () => {
    setUser(null);
  };

  return (
    <div className="container">
      <h2>POST, PUT, PATCH Example</h2>

      <button onClick={addUser}>Add User (POST)</button>
      <button onClick={updateUserPut}>Update User (PUT)</button>
      <button onClick={updateUserPatch}>Update Email (PATCH)</button>
      <button onClick={clearlist}>Clear</button>

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