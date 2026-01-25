import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted!');
    navigate('/'); // Go back to the main page after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;