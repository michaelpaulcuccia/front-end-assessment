import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./views/Home";
import About from "./views/About";
import Game from "./views/Game";
import Container from "./components/container";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <NavBar>
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/About">
              About
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/Game">
              Game
            </Link>
          </div>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
