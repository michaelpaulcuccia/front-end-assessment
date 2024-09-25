import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./themeSelector.css";

const themes = ["travel", "art", "pets", "music"];

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setTimeout(() => {
      navigate("/Game");
    }, 1000);
  };

  return (
    <div>
      <h3>
        Please select a theme below. Or, click on the Game tab above to play.
      </h3>
      <br />
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
