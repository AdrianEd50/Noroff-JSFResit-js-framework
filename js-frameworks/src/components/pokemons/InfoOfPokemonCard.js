import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MoreInfoCard(pokemon) {
  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-card-content">
          <Card style={{ width: "18rem" }} className="more-info-card">
            <Card.Body>
              <Card.Title>
                <h1>{pokemon.name}</h1>
                <p>Id: {pokemon.id}</p>
                <p> Artist: {pokemon.artist}</p>
                <p> Types: {pokemon.types}</p>
                <p> Supertypes: {pokemon.subtypes}</p>
                <p>NationalPokedexNumbers: {pokemon.nationalPokedexNumbers}</p>
                <p> Rarity: {pokemon.rarity}</p>
                <p> Number: {pokemon.number}</p>
                <p> Level: {pokemon.level}</p>
                <p> Hp: {pokemon.hp}</p>
                <p> Supertype: {pokemon.supertype}</p>
                <p> RetreatCost: {pokemon.retreatCost}</p>
                <p> convertedRetreatCost: {pokemon.convertedRetreatCost}</p>
                <p> Subtypes: {pokemon.subtypes}</p>
                <p> EvolvesFrom: {pokemon.evolvesFrom}</p>
                <Card.Text></Card.Text>
                <Card.Img
                  variant="top"
                  src={pokemon.images}
                  alt={pokemon.name}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
