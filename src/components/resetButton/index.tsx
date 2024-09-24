import React, { useState } from "react";
import "./resetButton.css";

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
  const [buttonText, setButtonText] = useState("Click to Start");

  const handleClick = () => {
    onClick(); //resets game by triggering shuffle
    setButtonText("Reset");
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default ResetButton;
