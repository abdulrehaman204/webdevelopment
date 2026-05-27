import React from "react";

function Button({ text, onClick, color = "blue" }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;