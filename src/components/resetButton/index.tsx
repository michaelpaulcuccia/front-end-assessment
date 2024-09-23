import React from "react";
import "./resetButton.css";

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="reset-button" onClick={onClick}>
      reset
    </button>
  );
};

export default ResetButton;
