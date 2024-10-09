import React from "react";
import "./navbar.css";
import Line from "../line";
import logo_generic from "../../assets/logo-generic.svg";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <img className="nav-image" src={logo_generic} alt="Generic Logo" />
      <div className="nav-container">{children}</div>
      <Line />
    </>
  );
};

export default NavBar;
