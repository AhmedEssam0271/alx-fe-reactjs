import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import PropTypes from "prop-types";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title || ""); // Set default value if recipe is missing
  const [description, setDescription] = useState(recipe.description || "");

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

EditRecipeForm.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditRecipeForm;
