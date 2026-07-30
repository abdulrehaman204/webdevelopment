import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (username.trim() === "") return;

    login(username);

    setUsername("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button
        onClick={handleLogin}
        style={{ marginLeft: "10px" }}
      >
        Login
      </button>
    </div>
  );
}