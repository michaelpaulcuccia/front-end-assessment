import "./App.css";
import Header from "./components/header";
import Container from "./components/container";
import Card from "./components/card";
import CardGrid from "./components/cardGrid";
import { cards, defaultCard, CardInterface } from "./constants";

const shuffleCards = (array: CardInterface[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledCards = shuffleCards([...cards]);

const App = () => (
  <Container>
    <Header />
    <CardGrid>
      {shuffledCards.map((item, i) => (
        <Card
          key={i}
          name={item.name}
          img={item.img}
          defaultImg={defaultCard.img}
        />
      ))}
    </CardGrid>
  </Container>
);

export default App;
