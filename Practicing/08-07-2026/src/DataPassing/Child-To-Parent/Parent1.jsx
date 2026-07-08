import React, { useState } from 'react'
import Counter from './Counter';

function Parent1() {
const [count, setCount] = useState(0);

  // Callback functions
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
       <h1>Parent Component</h1>

      <h2>Current Count: {count}</h2>

      <Counter
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  )
}

export default Parent1

