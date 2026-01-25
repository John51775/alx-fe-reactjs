import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Sample Recipe', description: 'This is a test recipe.' },
  ], // <- sample recipe

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
}));
