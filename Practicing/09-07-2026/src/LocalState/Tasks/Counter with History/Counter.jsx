import React, { useReducer, useState } from 'react'

let initialstate ={
    count :0,
    increments :0,
    decrements : 0
}

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {
                count : state.count+1,
                increments : state.increments+1,
                decrements : state.decrements,
            }
        case "decrement":
            return {
        count: state.count - 1,
        increments: state.increments,
        decrements: state.decrements + 1,
           };

        case "reset":
           return initialstate;

        default:
            return state;
    }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [history, setHistory] = useState([0]);

  const update = (type) => {
    let newValue = state.count;

    if (type === "increment") newValue++;
    if (type === "decrement") newValue--;
    if (type === "reset") newValue = 0;

     dispatch({ type });
    setHistory([...history, newValue]);
  };

  return (
    <div>
       <h1>{state.count}</h1>

      <button onClick={() => update("increment")}>+</button>
      <button onClick={() => update("decrement")}>-</button>
      <button onClick={() => update("reset")}>Reset</button>
     
      <h3>Incremented: {state.increments}</h3>
      <h3>Decremented: {state.decrements}</h3>

      <h2>History</h2>
      {history.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Counter
