import React, { useState } from "react";
import "./Toggle.css"

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState("Home");

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <h1>Toggle Component</h1>

      {/* Show / Hide Section */}
      <button className="toggle-btn" onClick={toggleContent}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      <div className={`content ${isVisible ? "show" : "hide"}`}>
        <p>
          This content appears and disappears with a smooth transition.
        </p>
      </div>

      {/* Multiple State Toggle (Tabs/Modes) */}
      <div className="tabs">
        <button
          className={mode === "Home" ? "active" : ""}
          onClick={() => setMode("Home")}
        >
          Home
        </button>

        <button
          className={mode === "Profile" ? "active" : ""}
          onClick={() => setMode("Profile")}
        >
          Profile
        </button>

        <button
          className={mode === "Settings" ? "active" : ""}
          onClick={() => setMode("Settings")}
        >
          Settings
        </button>
      </div>

      <div className="tab-content">
        {mode === "Home" && <p>🏠 Welcome to the Home page.</p>}
        {mode === "Profile" && <p>👤 This is your Profile.</p>}
        {mode === "Settings" && <p>⚙️ Manage your Settings here.</p>}
      </div>
    </div>
  );
};

export default Toggle;
