import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";

export default function Main() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}