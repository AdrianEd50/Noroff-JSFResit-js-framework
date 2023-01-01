import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import PokemonCard from "./card";
import Heading from "../layout/Heading";

export default function ListOfPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(function () {
    async function retrivePokemons() {
      try {
        const response = await axios.get(BASE_URL);
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
    <div className="container">
      <Heading content="Pokemons" />
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search for pokemons"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="pokemons-grid">
        {pokemons
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((pokemon) => (
            <PokemonCard
              className="pokemons_content"
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              images={pokemon.images.small}
              href={pokemon.id}
            />
          ))}
      </div>
    </div>
  );
}
