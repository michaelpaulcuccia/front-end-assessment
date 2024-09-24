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
  const [turns, setTurns] = useState(0);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [flippedCards, setFlippedCards] = useState<any[]>([]);

  const shuffle = () => {
    const doubledArray = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(doubledArray);
    setTurns(0);
  };

  const handlePick = (name: string) => {
    console.log("Card picked:", name);
    setFlippedCards([...flippedCards, name]);
  };

  return (
    <Container>
      <Header>
        <ResetButton onClick={shuffle} />
      </Header>
      <CardGrid>
        {cards.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            img={item.img}
            handlePick={handlePick}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

export default App;
