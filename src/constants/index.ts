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
}

export const cards: CardInterface[] = [
  {
    name: "beach",
    img: beach,
  },
  {
    name: "camel",
    img: camel,
  },
  {
    name: "cathedral",
    img: cathedral,
  },
  {
    name: "lighthouse",
    img: lighthouse,
  },
  {
    name: "road",
    img: road,
  },
  {
    name: "venice",
    img: venice,
  },
];

export const defaultCard = { name: "card", img: card };
