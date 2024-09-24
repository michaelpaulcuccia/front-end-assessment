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
      <Header>
        <ResetButton onClick={shuffle} />
      </Header>
      <CardGrid>
        {cards.map((item, i) => (
          <Card key={i} name={item.name} img={item.img} />
        ))}
      </CardGrid>
    </Container>
  );
};

export default App;
