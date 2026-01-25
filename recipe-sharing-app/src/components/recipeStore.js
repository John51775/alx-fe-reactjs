import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // All recipes
  recipes: [],

  // Search term for filtering
  searchTerm: '',

  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to add recipes
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Action to delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Filtered recipes based on search term
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;

    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));