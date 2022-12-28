import React from "react";
import "../App.css";
//import ListOfPokemons from "./pokemons/Pokemon";
import Heading from "./layout/Heading";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Heading content="Home" />
      </div>
      <footer>copyright&copy;</footer>
    </>
  );
}

export default Home;

//<ListOfPokemons />
