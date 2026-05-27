import React, { useEffect, useState } from "react";
import axios from "axios";

function AB() {
  const [users, setUsers] = useState([]);

  // GET 
  const handleclick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CLEAR LIST
  const clearlist = () => {
    setUsers([]);
  };

  // POST 
  const addUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "John Doe",
        email: "john@example.com",
      })
      .then((response) => {
        console.log("POST Response:", response.data);
        setUsers([...users, response.data]); // add to UI
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PUT 
  const updateUserPut = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", {
        id: 1,
        name: "Abdul (PUT)",
        email: "Abdul@Gmail.com",
      })
      .then((response) => {
        console.log("PUT Response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PATCH 
  const updateUserPatch = () => {
    axios
      .patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "Abdul Rehaman (PATCH)",
      })
      .then((response) => {
        console.log("PATCH Response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>User List</h2>

      <button onClick={handleclick}>Open the list</button>
      <button onClick={clearlist}>Clear the list</button>
      <button onClick={addUser}>Add User (POST)</button>
      <button onClick={updateUserPut}>Update User (PUT)</button>
      <button onClick={updateUserPatch}>Update User (PATCH)</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default AB;