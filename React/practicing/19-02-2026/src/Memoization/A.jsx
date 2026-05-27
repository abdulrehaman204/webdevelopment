import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Child from "./B";

function App() {
  const [count, setCount] = useState(0);
  const [age, setage] = useState(false);

  const Calculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const doubledCount = useMemo(() => {
    return Calculation(count);
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Count: {count}</h2>
        <h3>Doubled (Expensive): {doubledCount}</h3>

        <div className="button-group">
          <button className="btn primary" onClick={() => setCount(count + 1)}> Increase Count </button>

          <button className="btn danger" onClick={() => setage(!age)}> Change Age</button>
        </div>

        <Child value={handleClick} />
      </div>
    </div>
  );
}

export default App;

