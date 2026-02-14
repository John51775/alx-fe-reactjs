import { useEffect, useState } from "react";
import recipesData from "../data.json";
import sampleImage from "../components/images(1).jpg";
export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  setRecipes(recipesData.default || recipesData);
}, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        🍽️ Recipe Collection
      </h1>

      {/* Responsive Grid */}
      <div className="
        grid 
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        max-w-7xl
        mx-auto
      ">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="
              bg-white 
              rounded-2xl 
              overflow-hidden 
              shadow-md 
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              flex flex-col
            "
          >
            {/* Image */}
            <img
               src={sampleImage}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm flex-grow">
                {recipe.summary}
              </p>

              {/* Button */}
              <button className="
                mt-4
                bg-blue-500
                text-white
                py-2
                rounded-lg
                hover:bg-blue-600
                transition-colors
              ">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}