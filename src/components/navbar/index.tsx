import React from "react";
import "./navbar.css";
import Line from "../line";

interface NavBarProps {
  children: React.ReactNode; // Typing for the children prop
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <div className="nav-container">{children}</div>
      <Line />
    </>
  );
};

export default NavBar;
