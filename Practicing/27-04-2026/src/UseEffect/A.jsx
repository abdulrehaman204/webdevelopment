import React, { useEffect, useState } from "react";

function A() {
  const [count, setCount] = useState(0);

  // Effect 1 → runs once
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Effect 2 → runs when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default A;
