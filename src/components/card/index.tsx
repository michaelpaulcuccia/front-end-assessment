import { useState } from "react";
import { useCardContext } from "../../hooks/useCard";
import "./card.css";

interface CardProps {
  img: string;
  name: string;
  defaultImg: string;
}

const Card: React.FC<CardProps> = ({ img, name, defaultImg }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { selectCard } = useCardContext();

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    setTimeout(() => {
      selectCard(name);
    }, 500);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img className="card-image" src={defaultImg} alt={name} />
        </div>
        <div className="flip-card-back">
          <img className="card-image" src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
