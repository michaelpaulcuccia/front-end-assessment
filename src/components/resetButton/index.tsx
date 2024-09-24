import React from "react";
import "./resetButton.css";

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick(); //resets game by triggering shuffle
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      reset
    </button>
  );
};

export default ResetButton;
