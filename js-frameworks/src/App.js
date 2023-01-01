import "./App.css";
import "./sass/style.scss";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pokemons/Home/Home";
import Grass from "./components/pokemons/grass/Grass";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ViewPokemon from "./components/pokemons/ViewPokemon";
import MoreInfo from "./components/pokemons/MoreInfo";

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

            <Route path="/pokemons/:id/info" element={<MoreInfo />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
