import React from "react";

function Card({ title, description, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px 0",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      {children}
    </div>
  );
}

export default Card;