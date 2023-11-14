import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { recipes } from "../../data";

function RecipeCard() {
  return (
    <div className="d-flex justify-content-center gap-5">
      {recipes.map((recipe) => (
        <Card
          className="shadow p-3 mb-5 bg-body-tertiary rounded"
          style={{ width: "18rem" }}
        >
          <Card.Img className="w-auto h-2 " variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.ingredients}</Card.Text>
            <Button variant="primary">More details...</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RecipeCard;
