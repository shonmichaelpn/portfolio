import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeToggle({ theme, onToggleTheme }) {
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeToggle;
