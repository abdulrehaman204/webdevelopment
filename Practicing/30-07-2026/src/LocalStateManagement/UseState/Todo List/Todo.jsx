import React, { useState } from 'react'

function Todo() {
    const[text,settext]=useState("")
    const[todos,settodos]=useState([])

    const addtodos =()=>{
        if (!text.trim()) return;

    settodos([...todos, text]);
    settext("");
    }

  return (
    <div>
        <input
        value={text}
        onChange={(e) => settext(e.target.value)}
      />

      <button onClick={addtodos}>Add ToDo</button>
      <ul>
        {todos.map((todo,index)=>(
            <li key={index}>
             {todo}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
