// src/components/FavoritesList.jsx
import { useEffect, useState } from "react";
import useRecipeStore from "../recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoritesIds = useRecipeStore((state) => state.favorites);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteRecipes = favoritesIds.map((id) =>
      recipes.find((recipe) => recipe.id === id)
    );
    setFavorites(favoriteRecipes);
  }, [favoritesIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
