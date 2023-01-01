import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import MoreInfoCard from "./InfoOfPokemonCard";
import Heading from "../../components/layout/Heading";

export default function PokemonInfo() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const pokemon_url = BASE_URL + `${id}`;

  useEffect(function () {
    async function retrivePokemon() {
      try {
        const response = await axios.get(pokemon_url);
        console.log(response.data);
        setPokemon(response.data.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    retrivePokemon();
  }, []);
  if (loading) return <div>Loading pokemons...</div>;

  if (error) return <div>{}</div>;

  return (
    <div className="pokemon-list">
      <Heading content="Spesific pokemon" />
      <MoreInfoCard
        key={pokemon.id}
        name={pokemon.name}
        id={pokemon.id}
        images={pokemon.images.small}
        href={pokemon.id}
        artist={pokemon.artist}
        types={pokemon.types}
        nationalPokedexNumbers={pokemon.nationalPokedexNumbers}
        rarity={pokemon.rarity}
        number={pokemon.number}
        level={pokemon.level}
        hp={pokemon.hp}
        supertype={pokemon.supertype}
        retreatCost={pokemon.retreatCost}
        convertedRetreatCost={pokemon.convertedRetreatCost}
        subtypes={pokemon.subtypes}
        evolvesFrom={pokemon.evolvesFrom}
      />
    </div>
  );
}
