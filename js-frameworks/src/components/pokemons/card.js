import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PokemonCard(pokemon) {
  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-card-content">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pokemon.images} alt={pokemon.name} />
            <Card.Body>
              <Card.Title>
                <h2>{pokemon.name}</h2>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href={`/pokemons/${pokemon.href}`}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
