import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialstate = {
    theme : "light",
}

function reducer(state,action){
    switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;