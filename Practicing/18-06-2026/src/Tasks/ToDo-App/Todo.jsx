import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <h3>Completed: {completedCount}</h3>
    </div>
  );
}

export default Todo;
