import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { getRandomMeal } from "../../services/mealsApi";
import { ShuffleIcon, ArrowRight } from "lucide-react";
import { setPageMeta } from "../../utils/seo";
import YouTubeButton from "../../components/YouTubeButton/YouTubeButton";
import MealDetailsSkeleton from "../../components/MealDetailsSkeleton/MealDetailsSkeleton";
import CategoryAndAreaLinks from "../../components/CategoryAndAreaLinks/CategoryAndAreaLinks";

export default function RandomMeal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMeal = async () => {
    try {
      setLoading(true);
      const data = await getRandomMeal();
      if (!data) throw new Error("Failed to fetch meal");

      setMeal(data);
      setPageMeta(
        `${data.strMeal} | Random Meal`,
        data.strInstructions
          ? data.strInstructions.slice(0, 150)
          : "Delicious random meal."
      );
    } catch (error) {
      toast.error(error.message || "Failed to fetch random meal.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (loading) return <MealDetailsSkeleton ingredientExists={false} />;

  if (!meal)
    return (
      <p className="text-center text-lg text-gray-500 dark:text-gray-400 py-10">
        No meal found. Try again.
      </p>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          🍽️ Random Meal
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Discover something delicious today
        </p>
      </header>

      {/* Meal Card */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold">{meal.strMeal}</h2>

          <CategoryAndAreaLinks
            strCategory={meal.strCategory}
            strArea={meal.strArea}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {meal.strInstructions
              ? meal.strInstructions.slice(0, 300) + "..."
              : "No description available."}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to={`/meal-details/${meal.idMeal}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              View Details <ArrowRight size={18} />
            </Link>

            {meal.strYoutube && (
              <YouTubeButton
                strYoutube={meal.strYoutube}
                strMeal={meal.strMeal}
              />
            )}
          </div>
        </div>
      </div>

      {/* Random Button */}
      <div className="flex justify-center">
        <button
          onClick={fetchMeal}
          className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600
                     text-white px-8 py-3 rounded-xl font-semibold text-lg
                     shadow-md hover:shadow-lg transition"
        >
          <ShuffleIcon size={22} />
          Get Another Meal
        </button>
      </div>
    </section>
  );
}
