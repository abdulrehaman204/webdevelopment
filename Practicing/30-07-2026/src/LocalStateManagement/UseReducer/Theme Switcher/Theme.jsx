import React, { useReducer } from 'react'

const initialState = {
  theme: "light",
};

function reducer(state,action){
    switch(action.type){
    case "LIGHT":
      return { theme: "light" };

    case "DARK":
      return { theme: "dark" };

    default:
      return state;
    }
}


function Theme() {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div
      style={{
        background:
          state.theme === "dark"
            ? "#222"
            : "#fff",
        color:
          state.theme === "dark"
            ? "#fff"
            : "#000",
        padding: "20px",
        height : "100vh",
      }}
    >
         <h2>{state.theme}</h2>

      <button onClick={() =>dispatch({ type: "LIGHT" })}>Light</button>

      <button onClick={() =>dispatch({ type: "DARK" })}>Dark</button>

    </div>
  )
}

export default Theme
