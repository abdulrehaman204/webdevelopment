import React from "react";

const Button = ({ label, type = "primary", onClick }) => {

  const styles = {
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "5px",
    color: "white"
  };

  const buttonTypes = {
    primary: {
      backgroundColor: "#007bff"
    },
    secondary: {
      backgroundColor: "#6c757d"
    },
    danger: {
      backgroundColor: "#dc3545"
    }
  };

  return (
    <button
      onClick={onClick}
      style={{ ...styles, ...buttonTypes[type] }}
    >
      {label}
    </button>
  );
};

export default Button;