import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./themeSelector.css";

const themes = ["travel", "art", "pets", "music"];

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return (
    <div>
      <h3>
        Welcome! <br />
        Please Select A Theme:
      </h3>
      {themes.map((themeOption) => (
        <button
          className={`reset-button ${
            theme === themeOption ? "selectedTheme" : ""
          }`}
          key={themeOption}
          onClick={() => handleThemeChange(themeOption)}
        >
          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}{" "}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
