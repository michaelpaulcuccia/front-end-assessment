import "./cardGrid.css";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardProps) => {
  return <div className="component">{children}</div>;
};

export default CardGrid;
