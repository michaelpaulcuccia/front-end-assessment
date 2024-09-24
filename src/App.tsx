import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Container from "./components/container";
import { cards as cardData, CardInterface } from "./constants";
import ResetButton from "./components/resetButton";

const App: React.FC = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [turns, setTurns] = useState(0);

  const shuffle = () => {
    const doubledArray = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(doubledArray);
    setTurns(0);
  };

  console.log(cards);

  return (
    <Container>
      <Header />
      <ResetButton onClick={shuffle} />
    </Container>
  );
};

export default App;
