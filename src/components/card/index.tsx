import { useState } from "react";
import "./card.css";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`component ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      Card
    </div>
  );
};

export default Card;
