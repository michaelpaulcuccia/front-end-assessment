//TRAVEL
import beach from "../assets/images/travel/beach.jpg";
import camel from "../assets/images/travel/camel.jpg";
import cathedral from "../assets/images/travel/cathedral.jpg";
import lighthouse from "../assets/images/travel/lighthouse.jpg";
import road from "../assets/images/travel/road.jpg";
import venice from "../assets/images/travel/venice.jpg";

//PETS
import dogOne from "../assets/images/pets/dogOne.jpg";
import dogTwo from "../assets/images/pets/dogTwo.jpg";
import dogThree from "../assets/images/pets/dogThree.jpg";
import dogFour from "../assets/images/pets/dogFour.jpg";
import catOne from "../assets/images/pets/catOne.jpg";
import catTwo from "../assets/images/pets/catTwo.jpg";

//ART
import artOne from "../assets/images/art/artOne.jpg";
import artTwo from "../assets/images/art/artTwo.jpg";
import artThree from "../assets/images/art/artThree.jpg";
import artFour from "../assets/images/art/artFour.jpg";
import artFive from "../assets/images/art/artFive.jpg";
import artSix from "../assets/images/art/artSix.jpg";

//MUSIC
import musicOne from "../assets/images/music/musicOne.jpg";
import musicTwo from "../assets/images/music/musicTwo.jpg";
import musicThree from "../assets/images/music/musicThree.jpg";
import musicFour from "../assets/images/music/musicFour.jpg";
import musicFive from "../assets/images/music/musicFive.jpg";
import musicSix from "../assets/images/music/musicSix.jpg";

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
    name: "artFive",
    img: artFive,
  },
  {
    id: 18,
    name: "artSix",
    img: artSix,
  },
];

const musicCards: CardInterface[] = [
  {
    id: 19,
    name: "musicOne",
    img: musicOne,
  },
  {
    id: 20,
    name: "musicTwo",
    img: musicTwo,
  },
  {
    id: 21,
    name: "musicThree",
    img: musicThree,
  },
  {
    id: 22,
    name: "musicFour",
    img: musicFour,
  },
  {
    id: 23,
    name: "musicFive",
    img: musicFive,
  },
  {
    id: 24,
    name: "musicSix",
    img: musicSix,
  },
];

export const getCardData = (theme: string): CardInterface[] => {
  switch (theme) {
    case "pets":
      return petCards;
    case "art":
      return artCards;
    case "music":
      return musicCards;
    default:
      return travelCards;
  }
};

// Export default card back
export const defaultCard = { name: "card", img: card };
