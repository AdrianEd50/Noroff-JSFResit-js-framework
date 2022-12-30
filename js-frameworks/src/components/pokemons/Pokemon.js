/*import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { BASE_URL } from "../../constants/api";
import PokemonCard from "./card";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setPokemons(response.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <>
        {pokemons.map(function (pokemon) {
          return <div key={pokemon.id}>{pokemon.name}</div>;
        })}
      </>
    </>
  );
}

export default PokemonList;*/

/*import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import PokemonCard from "./card";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function retrivePokemons() {
      try {
        const response = await axios.get(BASE_URL);
        setPokemons(response.data);
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
      {pokemons.map((pokemon) => {
        console.log(pokemon);
      })}
    </div>
  );
}*/

import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import PokemonCard from "./card";

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
    <div className="pokemon-list">
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search for pokemons"
        onChange={(e) => setSearch(e.target.value)}
      />
      {pokemons
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((pokemon) => (
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
