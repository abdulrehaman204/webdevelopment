import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  };
}

function Example() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: ''
  });
  console.log(state)

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) =>
          dispatch({ field: 'name', value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          dispatch({ field: 'email', value: e.target.value })
        }
      />
    </div>
  );
}

export default Example;