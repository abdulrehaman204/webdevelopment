import React, { useState, useCallback, useMemo } from "react";
import "./App.css";

const Child = React.memo(({ count, add }) => {
  console.log("Child Rendered");

  return (
    <div className="box">
      <h2>Count: {count}</h2>
      <button onClick={add}>Add +1</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);


  const double = useMemo(() => {
    console.log("Calculating double...");
    return count * 2;
  }, [count]);

  
  return (
    <div className="container">
      <h1>Simple Memo Example</h1>

      <Child count={count} add={add} />

      <div className="box">
        <h2>Double: {double}</h2>
      </div>

      <div className="box">
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

