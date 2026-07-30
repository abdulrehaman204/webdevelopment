import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: text,
    });

    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Todo App</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <hr />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;