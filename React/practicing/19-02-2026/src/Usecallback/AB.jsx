import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setOtherState(!otherState)}>
        Change Other State
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
