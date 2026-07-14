import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount((count>1) ? count-1 : 0 );
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrementByValue = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncrementByValue(5)}>
        Increment by 5
      </button>
    </div>
  );
}

export default Counter;