import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function App() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Update recommendations whenever the app loads
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        {/* Search */}
        <SearchBar />

        {/* Add Recipe */}
        <AddRecipeForm />

        {/* Recipe List */}
        <RecipeList />

        {/* Favorites */}
        <FavoritesList />

        {/* Recommendations */}
        <RecommendationsList />

        {/* Routes */}
        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to pass recipeId from URL params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
