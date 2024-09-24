import "./card.css";
import card from "../../assets/images/card.jpg";

interface CardProps {
  img: string;
  name: string;
  handlePick: () => void;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ img, name, handlePick, isFlipped }) => {
  return (
    <div className="flip-card" onClick={handlePick}>
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
