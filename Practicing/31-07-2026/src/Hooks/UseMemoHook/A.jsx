import { useMemo, useState } from "react";

function factorial(n) {
  console.log("Calculating...");

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function A() {
  const [number, setNumber] = useState(5);
  const [theme, setTheme] = useState(false);

  const answer = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h2>Factorial = {answer}</h2>

      <button
        onClick={() => setTheme(!theme)}
      >
        Change Theme
      </button>
    </div>
  );
}

export default A;