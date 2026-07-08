import { useState } from "react";

function TwoWay() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Name: {name}</h2>
    </div>
  );
}

export default TwoWay;
