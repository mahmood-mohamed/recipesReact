import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getIngredients } from "../../services/mealsApi";
import MealsSkeleton from "../../components/MealsSkeleton/MealSkeleton";
import IngredientCard from "./IngredientCard";
import { setPageMeta } from "../../utils/seo";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const data = await getIngredients();
        setIngredients(data || []); 

        setPageMeta("Ingredients | Recipes Food", "Browse meals by ingredient on Recipes Food.");  
      } catch (error) {
        toast.error(error.message || "Failed to load ingredients. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return (
    <section className="space-y-8" aria-label="Ingredients Section">
      <header>
        <h1 className="text-xl font-bold">Ingredients</h1>
        <h2 className="sr-only">Ingredients List</h2>
        <p className="text-gray-500 py-2 dark:text-gray-400">
          Browse meals by ingredient {!loading && ingredients.length > 0 && (
            <span className="ml-1 text-sm text-gray-400">
              ({ingredients.length} ingredients)
            </span>
          )}  
        </p>
      </header>

      {loading ? (
        <MealsSkeleton />
      ) : (
        <div className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4 lg:gap-5
        "
          aria-label="Ingredients list"
        >
          {ingredients?.map((ingredient) => (
            <IngredientCard
              key={ingredient.idIngredient}
              ingredient={ingredient}
            />
          ))}
        </div>
      )}
      {!loading && ingredients.length === 0 && (
        <p className="text-center text-gray-500">
          No ingredients found.
        </p>
      )}
    </section>
  );
}
