import { useState } from "react";
import "./card.css";
import card from "../../assets/images/card.jpg";

interface CardProps {
  img: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ img, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (cardName: string) => {
    setIsFlipped((prev) => !prev);
    console.log(cardName);
  };

  return (
    <div className="flip-card" onClick={() => handleFlip(name)}>
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
