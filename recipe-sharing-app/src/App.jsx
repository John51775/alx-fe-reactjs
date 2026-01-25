import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>

        {/* Search bar */}
        <SearchBar />

        <AddRecipeForm />
        <RecipeList />

        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to get the recipeId from URL params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
