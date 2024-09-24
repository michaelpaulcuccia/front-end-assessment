import { useState } from "react";
import "./card.css";
import card from "../../assets/images/card.jpg";

interface CardProps {
  img: string;
  name: string;
  handlePick: (name: string) => void;
}

const Card: React.FC<CardProps> = ({ img, name, handlePick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
    handlePick(name);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img className="card-image" src={card} alt={name} />
        </div>
        <div className="flip-card-back">
          <img className="card-image" src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
