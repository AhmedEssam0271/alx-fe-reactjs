// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRecipeStore from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Navigate back to the recipe list after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired,
};

export default DeleteRecipeButton;
