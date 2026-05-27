import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((task, i) => (
        <div key={i}>
          {task.text}
          <button onClick={() => removeTask(i)}>X</button>
        </div>
      ))}
    </div>
  );
}
