import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <span className="theme-checkbox"  >
            <input type="checkbox" id="checkbox" className="checkbox" />
            <label for="checkbox" className="label" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <div className='ball'></div>
            </label>
        </span>
    )
}

export default ThemeSwitcher;