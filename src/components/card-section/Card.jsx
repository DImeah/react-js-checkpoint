// Imports from react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { recipes } from "../../data";

// A function to dynamically render the recipe cards
function RecipeCard() {
  return (
    <div className="d-flex justify-content-center gap-5">
      {recipes.map((recipe) => (
        <div id={recipe.id}>
          <Card
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ width: "18rem", height: "35rem" }}
          >
            <Card.Img
              className="w-auto h-2 "
              variant="top"
              src={recipe.image}
            />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>{recipe.ingredients}</Card.Text>
              <Button variant="primary">More details...</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

// Export the recipe card for use in the App
export default RecipeCard;
