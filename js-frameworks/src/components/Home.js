import React from "react";
import "../App.css";
import ListOfPokemons from "./pokemons/Pokemon";
import Heading from "./layout/Heading";

function Home() {
  return (
    <>
      <div className="home-content">
        <Heading content="Home" />

        <div id="the-basics">
          <input
            className="typeahead"
            type="text"
            placeholder="Search for pokemons"
          />
        </div>

        <ListOfPokemons />
      </div>
      <footer>copyright&copy;</footer>
    </>
  );
}

export default Home;
