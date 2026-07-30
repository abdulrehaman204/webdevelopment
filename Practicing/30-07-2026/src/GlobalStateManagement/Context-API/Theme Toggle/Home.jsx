import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <>
      <h2>{theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  );
}
