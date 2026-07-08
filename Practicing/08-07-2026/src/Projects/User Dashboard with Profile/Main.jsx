import { useState } from "react";
import Dashboard from "./Dashboard";

function Main() {

  const [user, setUser] = useState({
    name: "Abdul Rehaman",
    role: "Developer",
    email: "Abdul@gmail.com",
    location: "India",
    image: "https://via.placeholder.com/100",
    status: "Online"
  });


  // Update profile from Main
  const updateProfile = () => {

    setUser({
      name: "Alice Smith",
      role: "Frontend Engineer",
      email: "alice@gmail.com",
      location: "USA",
      image: "https://via.placeholder.com/100",
      status: "Offline"
    });

  };


  // Update profile from child component
  const editProfile = (updatedUser) => {
    setUser(updatedUser);
  };


  return (
    <div className="container">

      <h1>Main Component</h1>

      <button onClick={updateProfile}>
        Update Profile
      </button>


      <Dashboard
        user={user}
        editProfile={editProfile}
      />

    </div>
  );
}

export default Main;