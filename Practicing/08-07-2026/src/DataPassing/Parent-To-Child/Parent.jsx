import React, { useState } from 'react'
import UserProfile from './UserProfile';

function Parent() {
    const users = [
    {
      name: "Abdul",
      age: 25,
      email: "Abdul@example.com",
    },
    {
      name: "Alice",
      age: 30,
      email: "alice@example.com",
    },
  ];

  const [currentUser, setCurrentUser] = useState(users[0]);

  const switchUser = () => {
    setCurrentUser((prevUser) =>
      prevUser.name === users[0].name ? users[1] : users[0]
    );
  };

  return (
    <div style={{ padding: "20px",}}>
       <h1>Parent Component</h1>

      <UserProfile
        name={currentUser.name}
        age={currentUser.age}
        email={currentUser.email}
      />

      <button onClick={switchUser}>Switch User</button>
    </div>
  )
}

export default Parent
