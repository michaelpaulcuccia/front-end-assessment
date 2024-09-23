import { ReactNode } from "react";
import "./cardGrid.css";

interface CardProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardProps) => {
  return <div className="grid">{children}</div>;
};

export default CardGrid;
