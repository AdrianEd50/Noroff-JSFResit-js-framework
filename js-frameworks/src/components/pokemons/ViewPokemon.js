import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import PokemonCard from "./card";
import { Link, useParams } from "react-router-dom";

export default function ViewPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const pokemon_url = BASE_URL + `${id}`;

  useEffect(function () {
    async function retrivePokemons() {
      try {
        const response = await axios.get(pokemon_url);
        console.log(response.data);
        setPokemons(response.data.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    retrivePokemons();
  }, []);
  if (loading) return <div>Loading pokemons...</div>;

  if (error) return <div>{}</div>;

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          images={pokemon.images.small}
          href={pokemon.id}
        />
      ))}
    </div>
  );
}
