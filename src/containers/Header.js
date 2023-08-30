import React from "react";
import useLocalStorage from "./useLocalStorage"; // Custom hook for managing local storage
import "./styles.css"; // Import the CSS file for styling

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);
  // Use the useLocalStorage hook to manage the dark mode state in local storage.
  // The initial value is set to "false", and the key for local storage is "darkMode".

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the dark mode state when the button is clicked.
  };

  return (
    <div className={`ui fixed menu ${isDarkMode ? "inverted" : ""}`}>
      <div className="ui container center">
        <h2 className={isDarkMode ? "white-text" : ""}>MyShop</h2>
        {/* Render the app title. Apply "white-text" class when in dark mode. */}
        <div className="button-container">
          <button className="toggle-button" onClick={toggleDarkMode}>
            Toggle Dark Mode: {isDarkMode ? "On" : "Off"}
          </button>
          {/* Render the toggle button for switching dark mode on and off.
               Display appropriate text based on the current mode. */}
        </div>
      </div>
    </div>
  );
};

export default Header;
