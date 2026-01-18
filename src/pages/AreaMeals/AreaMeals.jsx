import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setPageMeta } from '../../utils/seo';
import toast from 'react-hot-toast';
import { getMealsByArea } from '../../services/mealsApi';
import MealsSkeleton from '../../components/MealsSkeleton/MealSkeleton';
import MealsGrid from '../../components/MealsGrid/MealsGrid';

export default function AreaMeals() {
    const { area } = useParams();
    const [ areaMeals, setAreaMeals ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function fetchAreaMeals() {
            try {
                setLoading(true);
                const meals = await getMealsByArea(area);
                setAreaMeals(meals);

                setPageMeta(
                    `${area} Meals | Recipes Food`,
                    `Traditional meals from ${area}.`
                );
            } catch (error) {
                toast.error(error.message || 'Failed to load meals for this area.');
            } finally {
                setLoading(false);
            }
        }

        fetchAreaMeals();
    }, [area]);

    return (
        <section className="space-y-6" aria-label="Area Meals Section">
            <header className="space-y-2">
                <h1 className="text-xl font-bold">{area} Meals</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Explore traditional recipes from {area} {!loading && areaMeals.length > 0 && (
                        <span className="ml-1 text-gray-400 text-sm">({areaMeals.length} meals)</span>
                    )}
                </p>
            </header>

            {loading ? (
                <MealsSkeleton />
            ) : areaMeals.length === 0 ? (
                <p className="text-center text-lg my-4 text-gray-500">
                    No meals found for this area 🍽️
                </p>
            ) : (
                <MealsGrid meals={areaMeals} />
            )}
        </section>
    )
}
