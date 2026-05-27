import React from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");

  return (
    <div className="child">
      <button className="btn secondary" onClick={value}>Click Me</button>
    </div>
  );
});

export default Child;

