import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/container";
import NavBar from "./components/navbar";
import CookieConsent from "./components/cookieConsent";
import Home from "./views/Home";
import About from "./views/About";
import Game from "./views/Game";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Container>
          <NavBar>
            <div>
              <Link className="styled-link" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="styled-link" to="/Game">
                Game
              </Link>
            </div>
            <div>
              <Link className="styled-link" to="/About">
                About
              </Link>
            </div>
          </NavBar>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CookieConsent />
                  <Home />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
