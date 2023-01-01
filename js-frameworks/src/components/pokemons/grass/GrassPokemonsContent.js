/*import React, { useState, useEffect } from "react";

function GrassPokemons() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards")
      .then((response) => response.json())
      .then((data) => setCards(data.data))
      .catch((error) => console.error(error));
  }, []);

  const grassCards = cards.filter((card) => card.types.includes("Grass"));

  return (
    <div>
      {grassCards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>Type: {card.types.join(", ")}</p>
          
        </div>
      ))}
    </div>
  );
}

export default GrassPokemons;
*/

import React, { useState, useEffect } from "react";
import GrassPokemonCard from "./GrassPokemonCard";

function GrassPokemons() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards")
      .then((response) => response.json())
      .then((data) => setCards(data.data))
      .catch((error) => console.error(error));
  }, []);

  const grassCards = cards.filter((card) => card.types.includes("Grass"));

  return (
    <div className="pokemons-grid">
      {grassCards.map((card) => (
        <GrassPokemonCard
          key={card.id}
          name={card.name}
          id={card.id}
          images={card.images.small}
          href={card.id}
          types={card.types}
          rarity={card.rarity}
          level={card.level}
          hp={card.hp}
          evolvesFrom={card.evolvesFrom}
        />
      ))}
    </div>
  );
}

export default GrassPokemons;
