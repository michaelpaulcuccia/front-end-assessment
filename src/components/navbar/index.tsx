import React from "react";
import "./navbar.css";

interface NavBarProps {
  children: React.ReactNode; // Typing for the children prop
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return <div className="nav-container">{children}</div>;
};

export default NavBar;
