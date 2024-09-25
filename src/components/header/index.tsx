import React from "react";
import "./header.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <div>{children}</div>
    </header>
  );
};

export default Header;
