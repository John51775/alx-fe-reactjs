import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Recipes and search
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Simple mock: pick recipes not already favorited
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id)
    );
    set({ recommendations: recommended.slice(0, 5) }); // max 5
  },

  // Add/delete recipe actions
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));