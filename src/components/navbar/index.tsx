import React from "react";
import "./navbar.css";
import Line from "../line";
import zicasso_logo from "../../assets/zicasso_logo.png";

interface NavBarProps {
  children: React.ReactNode; // Typing for the children prop
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <img className="nav-image" src={zicasso_logo} alt="Zicasso Logo" />
      <div className="nav-container">{children}</div>
      <Line />
    </>
  );
};

export default NavBar;
