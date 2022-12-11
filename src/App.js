import { useState } from "react";
import CharactersList from "./components/CharactersList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <div className={`App ${theme}`}>
        <div className="title-row">
          <h2 className="title">Rick and Morty characters</h2>
          <ThemeSwitcher />
        </div>
        <CharactersList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
