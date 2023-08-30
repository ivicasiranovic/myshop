import React, { createContext, useContext, useState } from "react";

// Create a new context named ThemeContext
const ThemeContext = createContext();

// Custom hook to use the theme context and access its values
export function useTheme() {
  return useContext(ThemeContext);
}

// ThemeProvider component that wraps your app and provides the theme context
export function ThemeProvider({ children }) {
  // Initialize the theme state with a default value of false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light modes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Create a theme object with isDarkMode and toggleTheme properties
  const theme = {
    isDarkMode,
    toggleTheme,
  };

  // Provide the theme context to all the components within ThemeProvider
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
