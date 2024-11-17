import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom"; // Assuming react-router-dom is used
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId, 10))
  ); // Parse ID to integer

  return (
    <div>
      <h1>{recipe?.title}</h1> {/* Handle potential undefined recipe */}
      <p>{recipe?.description}</p>
      {recipe && ( // Render edit form and delete button only if recipe exists
        <>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
