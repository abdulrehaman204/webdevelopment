import React, { useState, useCallback, useMemo } from "react";

const Child = React.memo(function Child({ user, onClick }) {
  console.log("Child Rendered");
  return (
    <div>
      <p>Name: {user.name}</p>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);


  const user = useMemo(() => {
    return { name: "John" };
  }, []);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child user={user} onClick={handleClick} />
    </div>
  );
}
