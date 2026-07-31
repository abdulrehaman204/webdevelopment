import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    padding: "30px",
    height: "100vh"
  };

  return (
    <div style={style}>
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default Theme;