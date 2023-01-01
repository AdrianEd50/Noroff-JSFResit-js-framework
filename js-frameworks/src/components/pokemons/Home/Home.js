import React from "react";
import "../../../App.css";
import ListOfPokemons from "../Pokemon";

function Home() {
  return (
    <>
      <div className="container">
        <ListOfPokemons />
      </div>
      <footer>copyright&copy;</footer>
    </>
  );
}

export default Home;
