import React from "react";
import "./header.css";
import zicasso_logo from "../../assets/zicasso_logo.png";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <img className="header-image" src={zicasso_logo} alt="Zicasso Logo" />
      <div>{children}</div>
    </header>
  );
};

export default Header;
