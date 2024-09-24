import beach from "../assets/images/beach.jpg";
import camel from "../assets/images/camel.jpg";
import cathedral from "../assets/images/cathedral.jpg";
import lighthouse from "../assets/images/lighthouse.jpg";
import road from "../assets/images/road.jpg";
import venice from "../assets/images/venice.jpg";
import card from "../assets/images/card.jpg";

export interface CardInterface {
  name: string;
  img: string;
  id: number;
}

export const cards: CardInterface[] = [
  {
    id: 1,
    name: "beach",
    img: beach,
  },
  {
    id: 2,
    name: "camel",
    img: camel,
  },
  {
    id: 3,
    name: "cathedral",
    img: cathedral,
  },
  {
    id: 4,
    name: "lighthouse",
    img: lighthouse,
  },
  {
    id: 5,
    name: "road",
    img: road,
  },
  {
    id: 6,
    name: "venice",
    img: venice,
  },
];

export const defaultCard = { name: "card", img: card };
