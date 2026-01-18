import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMealsByIngredient, getRandomMeal } from "../../services/mealsApi";
import toast from "react-hot-toast";
import { setPageMeta } from "../../utils/seo";
import MealsGrid from "../../components/MealsGrid/MealsGrid";
import MealsSkeleton from './../../components/MealsSkeleton/MealSkeleton';


export default function IngredientMeals() {
    const { ingredient } = useParams();
    const [ingredientMeals, setIngredientMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchIngredientMeals() {
            try {
                setLoading(true);
                const meals = await getMealsByIngredient(ingredient);
                setIngredientMeals(meals);

                setPageMeta(
                    `${ingredient} Meals | Recipes Food`,
                    `Discover delicious meals made with ${ingredient} on Recipes Food.`
                );
            } catch (error) {
                toast.error(error?.message || "Failed to load meals for this ingredient. Please try again later.")
            } finally {
                setLoading(false);
            }
        }

        fetchIngredientMeals();
    }, [ingredient]);

    return (
        <section className="space-y-6" aria-label={`Meals with ${ingredient}`}>
            <header className="space-y-2">
                <h1 className="text-xl font-bold">{ingredient} Meals</h1>
                <h2 className="sr-only">Meals List</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Browse meals in the <b>"{ingredient}"</b> ingredient {!loading && ingredientMeals.length > 0 && (
                        <span className="ml-1 text-sm text-gray-400">
                        ({ingredientMeals.length} meals)
                        </span>
                    )}
                </p>
            </header>

            {loading ? (
                <MealsSkeleton />
            ) : ingredientMeals.length === 0 ? (
                <p className="text-center my-4 text-gray-500">
                    No meals found using "{ingredient}" 🥲
                </p>
            ) : (
                <MealsGrid meals={ingredientMeals} />
            )}
        </section>
    )
}
