//TRAVEL
import beach from "../assets/images/beach.jpg";
import camel from "../assets/images/camel.jpg";
import cathedral from "../assets/images/cathedral.jpg";
import lighthouse from "../assets/images/lighthouse.jpg";
import road from "../assets/images/road.jpg";
import venice from "../assets/images/venice.jpg";

//PETS
import dogOne from "../assets/images/dogOne.jpg";
import dogTwo from "../assets/images/dogTwo.jpg";
import dogThree from "../assets/images/dogThree.jpg";
import dogFour from "../assets/images/dogFour.jpg";
import catOne from "../assets/images/catOne.jpg";
import catTwo from "../assets/images/catTwo.jpg";

//ART
import artOne from "../assets/images/artOne.jpg";
import artTwo from "../assets/images/artTwo.jpg";
import artThree from "../assets/images/artThree.jpg";
import artFour from "../assets/images/artFour.jpg";
import artFive from "../assets/images/artFive.jpg";
import artSix from "../assets/images/artSix.jpg";

//DEFAULT CARD BACK
import card from "../assets/images/card.jpg";

export interface CardInterface {
  name: string;
  img: string;
  id: number;
}

const travelCards: CardInterface[] = [
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

const petCards: CardInterface[] = [
  {
    id: 7,
    name: "dogOne",
    img: dogOne,
  },
  {
    id: 8,
    name: "dogTwo",
    img: dogTwo,
  },
  {
    id: 9,
    name: "dogThree",
    img: dogThree,
  },
  {
    id: 10,
    name: "dogFour",
    img: dogFour,
  },
  {
    id: 11,
    name: "catOne",
    img: catOne,
  },
  {
    id: 12,
    name: "catTwo",
    img: catTwo,
  },
];

const artCards: CardInterface[] = [
  {
    id: 13,
    name: "artOne",
    img: artOne,
  },
  {
    id: 14,
    name: "artTwo",
    img: artTwo,
  },
  {
    id: 15,
    name: "artThree",
    img: artThree,
  },
  {
    id: 16,
    name: "artFour",
    img: artFour,
  },
  {
    id: 17,
    name: "artOne",
    img: artOne,
  },
  {
    id: 18,
    name: "artTwo",
    img: artTwo,
  },
];

export const getCardData = (theme: string): CardInterface[] => {
  switch (theme) {
    case "pets":
      return petCards;
    case "art":
      return artCards;
    default:
      return travelCards;
  }
};

// Export default card back
export const defaultCard = { name: "card", img: card };
