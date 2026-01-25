import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            <button onClick={() => removeFavorite(recipe.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;