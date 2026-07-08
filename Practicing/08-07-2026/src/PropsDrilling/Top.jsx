import { useState } from "react";
import Dashboard from "./Dashboard";

function Top() {
  const users = [
    {
      name: "Abdul",
      age: 25,
      email: "Abdul@example.com",
    },
    {
      name: "Alice Smith",
      age: 30,
      email: "alice@example.com",
    },
  ];

  const [user, setUser] = useState(users[0]);

  const changeUser = () => {
    setUser((prevUser) =>
      prevUser.name === users[0].name ? users[1] : users[0]
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>App Component</h1>

      <button onClick={changeUser}>Change User</button>

      <Dashboard user={user} />
    </div>
  );
}

export default Top;