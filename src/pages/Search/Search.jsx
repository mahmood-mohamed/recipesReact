import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MealsGrid from "../../components/MealsGrid/MealsGrid";
import MealsSkeleton from "../../components/MealsSkeleton/MealSkeleton";
import { searchMeals } from "../../services/mealsApi";
import { setPageMeta } from "../../utils/seo";
import toast from "react-hot-toast";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("s") || "";

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setMeals([]);
      return;
    }

    async function fetchMeals(){
      try {
        setLoading(true);
        const result = await searchMeals(query);
        setMeals(result);

        setPageMeta(
          `Search: ${query} | Recipes Food`,
          `Search result for "${query}" on Recipes Food.`
        );
      } catch (error) {
        toast.error(error?.message || "Failed to search meals. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
    
  }, [query]);

  return (
    <section className="space-y-6" aria-label="Search Results Section">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">
          Search results for{" "}
          <span className="text-orange-500 dark:text-orange-400">
            "{query}"
          </span>
        </h1>

        {!loading && query && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {meals.length
              ? `Found ${meals.length} meals`
              : "No matching meals found"
            }
          </p>
        )}
      </header>

      {/* Content */}
      {loading ? (
        <MealsSkeleton />
      ) : meals.length > 0 ? (
        <MealsGrid meals={meals} />
      ) : query ? (
        <p className="text-center text-gray-500 mt-16">
          No meals found matching "{query}" 🍽️
        </p>
      ) : (
        <p className="text-center text-gray-400 mt-16">
          Start typing to search for meals 🔍
        </p>
      )}
    </section>
  );
}
