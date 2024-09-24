import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./views/About";
import Game from "./views/Game";
import Container from "./components/container";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Link to="/">Home</Link> <Link to="/About">About</Link>{" "}
        <Link to="/Game">Game</Link>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
