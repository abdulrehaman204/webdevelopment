import React, { useState, useCallback, useMemo } from "react";
import "./App.css";

const Child = React.memo(({ value }) => {
  console.log("Child Rendered");
  return (
    <button className="child-btn" onClick={value}>
      Child Button
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setage] = useState(10);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  const A = useMemo(() => {
    console.log("calculating");
    return age * 5;
  }, [age]);

  return (
    <div className="container">
      <h2 className="title">Count: {count}</h2>

      <button
        className="primary-btn"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <Child value={handleClick} />

      <h2 className="age-text">Age × 5: {A}</h2>

      <button
        className="secondary-btn"
        onClick={() => setage(age + 1)}
      >
        Age Button
      </button>
    </div>
  );
}
