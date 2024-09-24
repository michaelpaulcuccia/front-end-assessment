import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/header";
import ResetButton from "../components/resetButton";
import CardGrid from "../components/cardGrid";
import Card from "../components/card";
import { getCardData, CardInterface } from "../constants";

const Game: React.FC = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [pickOne, setPickOne] = useState<CardInterface | null>(null);
  const [pickTwo, setPickTwo] = useState<CardInterface | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const { theme } = useContext(ThemeContext);

  // Fetch card data based on the current theme
  useEffect(() => {
    shuffle();
  }, [theme]);

  // Function to shuffle cards and reset the game state
  const shuffle = () => {
    const cardData = getCardData(theme); //Get card data based on the current theme
    const doubledArray = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));

    setCards(doubledArray);
    //Resets game state
    setFlippedCards([]);
    setMatchedCards([]);
    setPickOne(null);
    setPickTwo(null);
  };

  const handlePick = (card: CardInterface, index: number) => {
    //Ignore if two cards are already picked
    if (pickOne && pickTwo) return;

    //Ignore if the card is already flipped or matched
    if (flippedCards.includes(index) || matchedCards.includes(index)) return;

    //Update flipped cards
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

  const checkForMatch = (
    flipped: number[],
    pickOne: CardInterface | null,
    pickTwo: CardInterface | null
  ) => {
    if (pickOne && pickTwo) {
      if (pickOne.name === pickTwo.name) {
        alert("Match found!");
        const newMatchedCards = [...matchedCards, ...flipped];
        setMatchedCards(newMatchedCards);

        // Check if all cards are matched
        if (newMatchedCards.length === 14 || newMatchedCards.length === 16) {
          alert("You Win!");
          window.location.reload();
        }
      } else {
        alert("No match!");
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
    </>
  );
};

export default Game;
