import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;