import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import CardGrid from "./components/cardGrid";

const App = () => (
  <>
    <Header />
    <CardGrid>
      <Card />
      <Card />
      <Card />
      <Card />
    </CardGrid>
  </>
);

export default App;
