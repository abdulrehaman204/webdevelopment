import { useContext } from "react";
import { mytheme } from "./ThemeContext";


function Main() {
  const { theme, toggletheme } =
    useContext(mytheme);

  const styles = {
    backgroundColor:
      theme === "light" ? "#fff" : "#222",
    color:
      theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <h1>Current Theme : {theme}</h1>

      <button onClick={toggletheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Main;