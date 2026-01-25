import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;