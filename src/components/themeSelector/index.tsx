// src/components/ThemeSelector.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const themes = ["travel", "art", "pets"];

const ThemeSelector: React.FC = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div>
      <h3>Select Theme:</h3>
      {themes.map((theme) => (
        <button key={theme} onClick={() => handleThemeChange(theme)}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
