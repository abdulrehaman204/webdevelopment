function Counter({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>

      <button
        onClick={onDecrement}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;