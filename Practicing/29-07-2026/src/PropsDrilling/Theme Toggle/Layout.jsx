import React from "react";
import Header from "./Header";

function Layout({ theme }) {
  return (
    <div>
      <h2>Layout Component</h2>
      <Header theme={theme} />
    </div>
  );
}

export default Layout;