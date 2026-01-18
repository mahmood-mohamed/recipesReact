import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getMealsByLetter } from "../../services/mealsApi";
import MealsSkeleton from "../../components/MealsSkeleton/MealSkeleton";
import MealsGrid from "../../components/MealsGrid/MealsGrid";
import AlphabetFilter from './AlphabetFilter';
import { setPageMeta } from "../../utils/seo";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [letter, setLetter] = useState("A");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchMeals() {
      try {
        setLoading(true);
        const data = await getMealsByLetter(letter);
        if (!ignore) {
          setMeals(data || []);
          
          setPageMeta(
            `Recipes Food | Discover Recipes`,
            `Discover recipes for ${letter.toUpperCase()}`
          )
        }
      } catch (error) {
        console.log(error);
        
        if (!ignore) {
          toast.error(
            error?.message ||
            "Failed to load meals. Please try again."
          );
          setMeals([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchMeals();
    return () => {
      ignore = true;
    };
  }, [letter]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-xl font-bold">Discover Recipes</h1>
        <h2 className="sr-only">Meals List</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {`Browse meals by first letter "${letter}"`}
        </p>
      </header>

      {/* Letters Filter */}
      <AlphabetFilter active={letter} onChange={setLetter} />

      {/* Content */}
      {loading ? (
        <MealsSkeleton />
      ) : meals.length === 0 ? (
        <p className="text-center text-gray-500">
          No meals found for "{letter.toUpperCase()}"
        </p>
      ) : (
        <MealsGrid meals={meals} />
      )}
    </section>
  );
}
