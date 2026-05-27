
import React from "react";
import Button from "./Button";
import Card from "./Card";

function Main() {
  return (
    <div>
      <h2>Reusable Components Example</h2>

      {/* Reusable Buttons */}
      <Button
        text="Save"
        color="green"
        onClick={() => alert("Saved")}
      />

      <Button
        text="Delete"
        color="red"
        onClick={() => alert("Deleted")}
      />

      {/* Reusable Cards */}
      <Card
        title="React"
        description="React is a JavaScript library."
      />

      <Card
        title="JavaScript"
        description="JavaScript is used for web development."
      />
    </div>
  );
}

export default Main;