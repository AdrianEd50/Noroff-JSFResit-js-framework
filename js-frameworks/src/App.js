import "./App.css";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home";
import Grass from "./components/Grass";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ViewPokemon from "./components/pokemons/ViewPokemon";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" exaxt element={<Home />} />

            <Route path="/grass" element={<Grass />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/pokemons/:id" element={<ViewPokemon />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
