import React, { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("rrrr");
    if (token) {
      const role = token; // we store role as token for demo
      setPage(`${role.toLowerCase()}Profile`);
    }
  }, []);

  const renderHome = () => (
    <div>
      <h1>Are you a...?</h1>
      <button onClick={() => setPage("employeeLogin")}>Employee</button>
      <button onClick={() => setPage("hrLogin")}>HR</button>
      <button onClick={() => setPage("adminLogin")}>Admin</button>
      <button onClick={() => setPage("managerLogin")}>Manager</button>
    </div>
  );

  const LoginPage = ({ role }) => {
    const handleLogin = () => {
      // Fake login success
      const fakeToken = role; // normally backend token
      localStorage.setItem("rrrr", fakeToken); // store token
      setPage(`${role.toLowerCase()}Profile`);
    };

    return (
      <div>
        <h2>{role} Login Page</h2>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button onClick={handleLogin}>Login</button>
        <br /><br />
        <button onClick={() => setPage("home")}>Back</button>
      </div>
    );
  };

  const ProfilePage = ({ role }) => {
    const token = localStorage.getItem("rrrr");

    // Protect profile page
    if (!token) {
      return (
        <div>
          <h3>Please Login First</h3>
          <button onClick={() => setPage("home")}>Go Home</button>
        </div>
      );
    }

    const handleLogout = () => {
      localStorage.removeItem("rrrr");
      setPage("home");
    };

    return (
      <div>
        <h2>{role} Profile Page</h2>
        <p>Welcome {role}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {page === "home" && renderHome()}

      {page === "employeeLogin" && <LoginPage role="Employee" />}
      {page === "hrLogin" && <LoginPage role="HR" />}
      {page === "adminLogin" && <LoginPage role="Admin" />}
      {page === "managerLogin" && <LoginPage role="Manager" />}

      {page === "employeeProfile" && <ProfilePage role="Employee" />}
      {page === "hrProfile" && <ProfilePage role="HR" />}
      {page === "adminProfile" && <ProfilePage role="Admin" />}
      {page === "managerProfile" && <ProfilePage role="Manager" />}
    </div>
  );
}
