import { useState, createContext, useContext, useEffect, type ReactNode} from "react";

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
    
});

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.setAttribute(
        "theme",
        theme === 'dark' ? "dark" : "light"
        );
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
        {children}
        </ThemeContext.Provider>
    );
};
