import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMealsByCategory } from '../../services/mealsApi';
import MealsSkeleton from '../../components/MealsSkeleton/MealSkeleton';
import MealsGrid from '../../components/MealsGrid/MealsGrid';
import { setPageMeta } from '../../utils/seo';

export default function CategoryMeals() {
  const { category } = useParams();
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryMeals() {
      try {
        setLoading(true);

        const meals = await getMealsByCategory(category);
        setCategoryMeals(meals);

        setPageMeta(
          `${category} Meals Recipes | Recipes Food`,
          `Browse meals in the "${category}" category on Recipes Food.`
        );
      } catch (error) {
        toast.error(
          error?.message ||
          "Failed to load meals for this category. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryMeals();
  }, [category]);


  return (
    <section className="space-y-6" aria-label="Category Meals Section">
      <header className="space-y-2">
        <h1 className="text-xl font-bold">{category} Meals</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Browse meals in the <b>"{category}"</b> category 
          {!loading && categoryMeals.length > 0 && ( 
            <span className='ml-1 text-sm text-gray-500'> ({categoryMeals.length} meals)</span> 
          )}
        </p>
      </header>

      {loading ? (
        <MealsSkeleton />
      ) : categoryMeals.length === 0 ? (
        <p className="text-center text-gray-500">
          No meals found in "{category}" category 🍽️
        </p>
      ) : (
        <MealsGrid meals={categoryMeals} />
      )}
    </section>
  )
}
