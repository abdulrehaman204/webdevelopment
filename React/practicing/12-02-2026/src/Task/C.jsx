import React, { useState } from "react";
import "./D.css";

export default function A() {
  const [page, setPage] = useState("home");

  const renderHome = () => (
    <div className="card">
      <h1>Company Role ..?</h1>
      <button className="btn employee" onClick={() => setPage("employeeLogin")}>Employee</button>
      <button className="btn hr" onClick={() => setPage("hrLogin")}>HR</button>
      <button className="btn admin" onClick={() => setPage("adminLogin")}>Admin</button>
      <button className="btn manager" onClick={() => setPage("managerLogin")}>Manager</button>
    </div>
  );

  const LoginPage = ({ role }) => (
    <div className="card">
      <h2>{role} Login Page</h2>
      <input type="text" placeholder="Username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button
        className="btn login"
        onClick={() => setPage(`${role.toLowerCase()}Profile`)}
      >
        Login
      </button>
      <button className="btn back" onClick={() => setPage("home")}>Back</button>
    </div>
  );

  const ProfilePage = ({ role }) => (
    <div className="card">
      <h2>{role} Profile Page</h2>
      <p className="welcome">Welcome {role} </p>
      <button className="btn logout" onClick={() => setPage("home")}>
        Logout
      </button>
    </div>
  );

  return (
    <div className="container">
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
