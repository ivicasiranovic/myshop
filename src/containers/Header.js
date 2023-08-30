import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`ui fixed menu ${isDarkMode ? "inverted" : ""}`}>
      <div className="ui container center">
        <h2>MyShop</h2>
        <div className="button-container">
          <button className="toggle-button" onClick={toggleDarkMode}>
            Toggle Dark Mode: {isDarkMode ? "On" : "Off"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
