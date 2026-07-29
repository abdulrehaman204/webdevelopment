import React from "react";
import Profile from "./Profile";

function Header({ theme }) {
  return (
    <div>
      <h2>Header Component</h2>
      <Profile theme={theme} />
    </div>
  );
}

export default Header;