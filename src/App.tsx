import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Container from "./components/container";
import ResetButton from "./components/resetButton";
import CardGrid from "./components/cardGrid";
import Card from "./components/card";
import { cards as cardData, CardInterface } from "./constants";

const App: React.FC = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [pickOne, setPickOne] = useState<CardInterface | null>(null);
  const [pickTwo, setPickTwo] = useState<CardInterface | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  // Function to shuffle cards and reset the game state
  const shuffle = () => {
    const doubledArray = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(doubledArray);
    //RESET ITEMS
    setFlippedCards([]);
    setMatchedCards([]);
    setPickOne(null);
    setPickTwo(null);
  };

  const handlePick = (card: CardInterface, index: number) => {
    // Ignore if two cards are already picked
    if (pickOne && pickTwo) return;

    // Ignore if the card is already flipped or matched
    if (flippedCards.includes(index) || matchedCards.includes(index)) return;

    // Update flipped cards
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // If no first pick, set the first picked card
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

        // Check if all cards are matched (strange, it's either 14 or 16???)
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
    <Container>
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
    </Container>
  );
};

export default App; // Export the App component
