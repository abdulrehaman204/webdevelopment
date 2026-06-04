import React from "react";
import Button from "./Buttons";

function AB() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reusable Button Component</h2>

      <Button type="primary" label="Submit" onClick={handleClick} />
      <Button type="secondary" label="Cancel" onClick={handleClick} />
      <Button type="danger" label="Delete" onClick={handleClick} />

    </div>
  );
}

export default AB;
