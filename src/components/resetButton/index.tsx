import React from "react";
import "./resetButton.css";

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
