import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { useTheme } from "../context/ThemeContext"; // Import the ThemeContext to access theme-related functionality

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme(); // Destructure isDarkMode and toggleTheme from the ThemeContext

  return (
    <footer className={`Footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        <p className="footer-text">&copy; 2023 MyStore. All rights reserved.</p>
        <button className="theme-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </footer>
  );
}

export default Footer;
