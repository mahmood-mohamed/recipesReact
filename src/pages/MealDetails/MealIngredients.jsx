import { ArrowRight, CookingPot } from "lucide-react";
import { Link } from "react-router-dom";

export default function MealIngredients({ meal }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim()
      });
    }
  }

  return (
    <section aria-label="Ingredients Section">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <CookingPot className="w-5 h-5 text-orange-500" />
        <h2 className="text-xl font-semibold">
          Ingredients 
          <span className="text-sm text-gray-500"> ({ingredients.length})</span>
        </h2>
      </div>

      {/* Ingredients Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {ingredients.map((item) => (
          <li key={item.ingredient}>
            <Link
              to={`/ingredients/${item.ingredient}`}
              className="
                group flex items-center gap-3
                bg-gray-100 dark:bg-gray-800
                p-3 rounded-lg
                hover:bg-blue-50 dark:hover:bg-gray-700
                transition
              "
              aria-label={`Explore meals with ${item.ingredient}`}
            >
              {/* Ingredient Image */}
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.ingredient}-Small.png`}
                alt={item.ingredient}
                loading="lazy"
                className="
                  w-10 h-10 object-contain
                  group-hover:scale-105 transition
                "
                title={item.ingredient}
                onError={(e) => (e.currentTarget.src = "/assets/ingredient-placeholder.png")}
              />

              {/* Text */}
              <div className="leading-tight">
                <h3 className="font-medium text-sm text-gray-900 dark:text-white" title={item.ingredient}>
                  {item.ingredient}
                </h3>
                {item.measure && (
                  <p className="text-xs text-gray-500 dark:text-gray-400" title={item.measure}>
                    {item.measure}
                  </p>
                )}
              </div>

              {/* Arrow Indicator */}
              <span
                aria-hidden="true"
                className="
                  ml-auto text-xs text-gray-400
                  group-hover:text-blue-500
                  transition
                "
              >
                <ArrowRight size={18} />
              </span>
            </Link>

          </li>
        ))}
      </ul>
    </section>
  );
};
