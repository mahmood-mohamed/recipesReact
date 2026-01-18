import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getMealById } from "../../services/mealsApi";
import { setPageMeta } from "../../utils/seo";
import MealIngredients from "./MealIngredients";
import { MapPinned, Utensils } from "lucide-react";
import MealDetailsSkeleton from "../../components/MealDetailsSkeleton/MealDetailsSkeleton";
import YouTubeButton from './../../components/YouTubeButton/YouTubeButton';
import CategoryAndAreaLinks from "../../components/CategoryAndAreaLinks/CategoryAndAreaLinks";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        setLoading(true);
        const data = await getMealById(id);
        if (!data) throw new Error("Meal not found");

        setMeal(data);

        setPageMeta(
          `${data.strMeal} | Recipes Food`,
          data.strInstructions.slice(0, 150)
        );
      } catch (error) {
        toast.error(
          error?.message || "Failed to load meal details. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMeal();
  }, [id]);

  if (loading) return <MealDetailsSkeleton />;
  if (!meal) return <p className="text-center py-6">Meal not found</p>;

  return (
    <section className="max-w-6xl mx-auto space-y-8" aria-label={`${meal.strMeal} recipe`}>

      {/* Header Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-xl font-bold">{meal.strMeal}</h1>

          {/* Category & Area Links */}
          <CategoryAndAreaLinks
            strCategory={meal.strCategory}
            strArea={meal.strArea}
          />

          {/* Tags */}
          {meal.strTags && (
            <div className="flex flex-wrap items-center gap-2 text-sm mt-2" aria-label="Meal Tags">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Tags:</span>
              {meal.strTags.split(",").map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {meal.strInstructions}
          </p>

          {/* YouTube Button */}
          {meal.strYoutube &&  <YouTubeButton strYoutube={meal.strYoutube} strMeal={meal.strMeal} />}
        </div>
      </div>

      {/* Ingredients */}
      <MealIngredients meal={meal} />
    </section>
  );
}
