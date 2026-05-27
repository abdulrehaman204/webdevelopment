import React from "react";
import Alert from "./Alert";

function Ap() {
  return (
    <div>
      <h2>Reusable Alert Component</h2>

      <Alert type="success" message="Data saved successfully!" />
      <Alert type="error" message="Something went wrong!" />
      <Alert type="warning" message="Please check your input!" />
      
    </div>
  );
}

export default Ap;