import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function GrassPokemonCard(pokemon) {
  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-card-content">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pokemon.images} alt={pokemon.name} />
            <Card.Body>
              <Card.Title>
                <h2>{pokemon.name}</h2>
                <p> Type: {pokemon.types}</p>
                <p> Rarity: {pokemon.rarity}</p>
                <p> Level: {pokemon.level}</p>
                <p> Hp: {pokemon.hp}</p>
                <p> Evolvesfrom: {pokemon.evolvesFrom}</p>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button
                variant="primary"
                href={`/pokemons/${pokemon.href}`}
                className="read-more-cta"
              >
                Read more
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
