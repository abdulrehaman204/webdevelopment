import React, { useState, useEffect } from "react";


function Todo() {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [task, setTask] = useState("");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleComplete(t.id)}
              className={t.completed ? "completed" : ""}
            >
              {t.text}
            </span>

            <button onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
