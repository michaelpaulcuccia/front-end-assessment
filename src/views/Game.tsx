import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/header";
import ResetButton from "../components/resetButton";
import CardGrid from "../components/cardGrid";
import Card from "../components/card";
import { getCardData, CardInterface } from "../constants";
import Banner from "../components/banner";

const Game: React.FC = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [pickOne, setPickOne] = useState<CardInterface | null>(null);
  const [pickTwo, setPickTwo] = useState<CardInterface | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [bannerMessage, setBannerMessage] = useState<string>("");
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);
  const [bannerColor, setBannerColor] = useState<string>("gray"); // State for the banner color
  const [matchCount, setMatchCount] = useState<number>(0); // Track the number of matched pairs
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    shuffle();
  }, [theme]);

  //Function to shuffle cards and reset the game state
  const shuffle = () => {
    const cardData = getCardData(theme);
    const doubledArray = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));

    setCards(doubledArray);
    // Resets game state
    setFlippedCards([]);
    setMatchedCards([]);
    setPickOne(null);
    setPickTwo(null);
    setMatchCount(0);
  };

  const handlePick = (card: CardInterface, index: number) => {
    // Ignore if two cards are already picked
    if (pickOne && pickTwo) return;

    // Ignore if the card is already flipped or matched
    if (flippedCards.includes(index) || matchedCards.includes(index)) return;

    // Update flipped cards
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (!pickOne) {
      setPickOne(card);
    } else {
      const currentPickTwo = card;
      setPickTwo(currentPickTwo);

      setTimeout(() => {
        checkForMatch(newFlippedCards, pickOne, currentPickTwo);
      }, 1000);
    }
  };

  const showBanner = (message: string, color: string = "gray") => {
    setBannerMessage(message);
    setBannerVisible(true);
    setBannerColor(color);
    setTimeout(() => {
      setBannerVisible(false);
    }, 1500);
  };

  const checkForMatch = (
    flipped: number[],
    pickOne: CardInterface | null,
    pickTwo: CardInterface | null
  ) => {
    if (pickOne && pickTwo) {
      if (pickOne.name === pickTwo.name) {
        showBanner("Match found!", "green");
        const newMatchedCards = [...matchedCards, ...flipped];
        setMatchedCards(newMatchedCards);
        setMatchCount(matchCount + 1);

        // Check if six pairs are matched - getting values of 14 or 16 in previous code, this seems like the best fix
        if (matchCount + 1 === 6) {
          showBanner("You Win!", "blue");

          // Delay of 2 seconds before returning home
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } else {
        showBanner("No match!", "red");
        setFlippedCards([]);
      }
      // Reset picked cards
      setPickOne(null);
      setPickTwo(null);
    }
  };

  return (
    <>
      <Header>
        <ResetButton onClick={shuffle} />
      </Header>
      <CardGrid>
        {cards.map((item, i) => (
          <Card
            key={item.id}
            name={item.name}
            img={item.img}
            handlePick={() => handlePick(item, i)}
            isFlipped={flippedCards.includes(i) || matchedCards.includes(i)} // Check if card is flipped or matched
          />
        ))}
      </CardGrid>
      <Banner
        message={bannerMessage}
        visible={bannerVisible}
        backgroundColor={bannerColor} // Pass the background color
      />
    </>
  );
};

export default Game;
