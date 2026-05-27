import React, { useState, useCallback, useMemo, } from "react";

const Child = React.memo(({ value }) => {
  console.log("Child Rendered");
  return <button onClick={value}>Child Button</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [age,setage] = useState(10)

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

   const A= useMemo(()=>{
    console.log("calculating")
    return age*5;
  },[age])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child value={handleClick} />
      <h2>age : {A}</h2>
      <button onClick={()=> setage(age + 1)}>Age button</button>
    </div>
  );
}
