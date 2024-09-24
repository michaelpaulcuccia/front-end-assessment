import React from "react";
import "./resetButton.css";

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick(); //resets game by triggering shuffle //VERCEL BUG ON RELOAD...2 of 2
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
