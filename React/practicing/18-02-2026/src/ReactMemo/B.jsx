import React, { useState } from "react";

const Child = React.memo(()=> {
  console.log("Child Rendered");
  return <div>I am child component</div>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child />
    </div>
  );
}
