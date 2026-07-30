import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./Slice";

function Toolkit() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() =>
          dispatch(increment())
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch(decrement())
        }
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch(reset())
        }
      >
        Reset
      </button>
    </>
  );
}


export default Toolkit;