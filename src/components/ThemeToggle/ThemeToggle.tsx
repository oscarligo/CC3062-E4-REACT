import { useTheme } from '../../context/ThemeContext/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label="Set theme"
        >
        {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
}