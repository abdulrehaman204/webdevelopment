import React from "react";

function Alert({ type, message }) {
  const styles = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    color: "#fff",
  };

  const typeStyles = {
    success: { backgroundColor: "green" },
    error: { backgroundColor: "red" },
    warning: { backgroundColor: "orange" },
  };

  return (
    <div style={{ ...styles, ...typeStyles[type] }}>
      {message}
    </div>
  );
}

export default Alert;
