import Card from "react-bootstrap/Card";

export default function SinglePokemonCard(pokemon) {
  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-card-content">
          <Card style={{ width: "18rem" }} className="single_pokemon_card">
            <Card.Img variant="top" src={pokemon.images} alt={pokemon.name} />
            <Card.Body>
              <Card.Title>
                <h1>{pokemon.name}</h1>
                <p>Id: {pokemon.id}</p>
                <p> Rarity: {pokemon.rarity}</p>
                <p> Level: {pokemon.level}</p>
                <p> Hp: {pokemon.hp}</p>
                <p> EvolvesFrom: {pokemon.evolvesFrom}</p>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
