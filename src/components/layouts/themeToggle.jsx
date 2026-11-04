import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button type="button" onClick={toggleTheme}> {theme} </button>
    );
}
export default ThemeToggle;
