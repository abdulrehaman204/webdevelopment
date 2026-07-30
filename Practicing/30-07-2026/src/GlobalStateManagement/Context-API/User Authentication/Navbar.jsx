import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#333",
        color: "white",
        padding: "15px",
      }}
    >
      <h2>My App</h2>

      <div>
        {user ? (
          <>
            <span>Welcome, {user}</span>

            <button
              style={{ marginLeft: "10px" }}
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <span>Not Logged In</span>
        )}
      </div>
    </div>
  );
}