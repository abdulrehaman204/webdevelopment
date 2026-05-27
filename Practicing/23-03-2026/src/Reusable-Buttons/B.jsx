import React from "react";

const B = ({ label, type = "primary", onClick }) => {

const baseStyle = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    margin: "5px",
};


const typeStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
};

return (
    <button
      style={{ ...baseStyle, ...typeStyles[type] }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default B;