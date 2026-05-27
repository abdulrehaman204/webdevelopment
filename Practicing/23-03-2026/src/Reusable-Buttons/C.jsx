import React from "react";
import B from "./B";

const C = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Reusable Button Demo</h2>

      <B
        type="primary"
        label="Submit"
        onClick={() => alert("Submitted")}
      />

      <B
        type="secondary"
        label="Cancel"
        onClick={() => alert("Cancelled")}
      />

      <B
        type="danger"
        label="Delete"
        onClick={() => alert("Deleted")}
      />
    </div>
  );
};

export default C;