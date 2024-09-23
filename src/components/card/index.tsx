import { useState } from "react";
import "./card.css";

interface CardProps {
  img: string;
  name: string;
  defaultImg: string;
}

const Card: React.FC<CardProps> = ({ img, name, defaultImg }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <img
        className="card-image"
        src={isFlipped ? img : defaultImg}
        alt={name}
      />
    </div>
  );
};

export default Card;
