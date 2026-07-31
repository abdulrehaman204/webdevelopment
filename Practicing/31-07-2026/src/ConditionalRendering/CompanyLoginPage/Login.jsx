import React, { useState } from "react";

function Login() {
  const [page, setPage] = useState("home"); 

  const renderHome = () => (
    <div>
      <h1>Are you a...?</h1>
      <button onClick={() => setPage("employeeLogin")}>Employee</button>
      <button onClick={() => setPage("hrLogin")}>HR</button>
      <button onClick={() => setPage("adminLogin")}>Admin</button>
      <button onClick={() => setPage("managerLogin")}>Manager</button>
    </div>
  );

  const LoginPage = ({ role }) => (
    <div>
      <h2>{role} Login Page</h2>
      <input type="text" placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={() => setPage(`${role.toLowerCase()}Profile`)}>
        Login
      </button>
      <br /><br />
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );

  const ProfilePage = ({ role }) => (
    <div>
      <h2>{role} Profile Page</h2>
      <p>Welcome {role}!</p>
      <button onClick={() => setPage("home")}>Logout</button>
    </div>
  );

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

export default Login;