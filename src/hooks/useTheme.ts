import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

/**
 * Resolves the initial theme from localStorage or system preference
 */
const getInitialTheme = (): Theme => {
  // Check localStorage first
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  // Fall back to system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

/**
 * Gets the icon component based on the current theme
 */
const getIconForTheme = (theme: Theme) => {
  return theme === "dark" ? Moon : Sun;
};

export const useTheme = () => {
  // Initialize theme state with resolved theme (from storage or system preference)
  // Use lazy initializer to call getInitialTheme only once
  const [theme, setTheme] = useState<Theme>(() => {
    const initialTheme = getInitialTheme();
    return initialTheme;
  });
  
  // Initialize icon state based on the resolved theme
  // We need to call getInitialTheme again here, but it's safe since it's a pure function
  // and both useState initializers are only called once on mount
  const [Icon, setIcon] = useState(() => getIconForTheme(getInitialTheme()));

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    // Update icon state when theme changes
    setIcon(getIconForTheme(theme));
  }, [theme]);

  // Listen for system theme changes (only if no theme is stored)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if no theme is stored in localStorage
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!storedTheme) {
        const newTheme: Theme = e.matches ? "dark" : "light";
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  return {
    theme,
    Icon,
    toggleTheme,
  };
};

