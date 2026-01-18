import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  return (
    <article
      className="
        bg-white dark:bg-gray-900
        rounded-xl overflow-hidden
        border dark:border-gray-800
        shadow-sm
        transition
        hover:shadow-lg
      "
    >
      <Link
        to={`/meal-details/${meal.idMeal}`}
        className="group block h-full"
        aria-label={`View details for ${meal.strMeal}`}
      >
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={`${meal.strMealThumb}/preview`}
            alt={`${meal.strMeal} recipe`}
            loading="lazy"
            decoding="async"
            className="
              w-full h-full object-cover
              group-hover:scale-105
              transition-transform duration-300
            "
          />
        </div>

        {/* Content */}
        <div className="p-3 lg:p-4">
          <h3
            className="
              font-semibold
              text-gray-800 dark:text-gray-100
              line-clamp-2
              group-hover:text-orange-500
              transition-colors duration-300
            "
            title={meal.strMeal}
          >
            {meal.strMeal}
          </h3>
        </div>
      </Link>
    </article>
  );
}
