import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./counter.css";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <img src="https://th.bing.com/th/id/OIP.cazGAGWLiECaq3jrVyn9vAHaEv?w=288&h=185&c=7&r=0&o=7&pid=1.7&rm=3"></img>
      <p>SkinCare Product ₹2000</p>
      <h1 className="counter-value">Quantity : {value}</h1>

      <div className="btn-group">
        <button
          className="btn increment"
          onClick={() => dispatch(increment(5))}
        >
          Buy  
        </button>

        <button
          className="btn decrement"
          onClick={() => dispatch(decrement(2))}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default Counter;


