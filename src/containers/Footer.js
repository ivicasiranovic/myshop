import React from "react";
import "./Footer.css";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

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
