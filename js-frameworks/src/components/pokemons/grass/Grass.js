import React from "react";
import Heading from "../../layout/Heading";
import GrassPokemons from "./GrassPokemonsContent";

function Grass() {
  return (
    <>
      <div className="wrapper">
        <Heading content="Grass Pokemons" />
        <GrassPokemons />
      </div>
      <footer>copyright&copy;</footer>
    </>
  );
}

export default Grass;
