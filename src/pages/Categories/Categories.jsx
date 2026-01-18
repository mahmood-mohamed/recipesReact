import { useEffect, useState } from "react";
import { getCategories } from "../../services/mealsApi";
import CategoryCard from "./CategoryCard";
import toast from "react-hot-toast";
import MealsSkeleton from "../../components/MealsSkeleton/MealSkeleton";
import { setPageMeta } from "../../utils/seo";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);

        setPageMeta(
          "Categories | Recipes Food", 
          "Browse meal categories on Recipes Food"
        )
      } catch (error) {
        toast.error(
          error?.message ||
          "Failed to load categories. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);


  return (
    <section className="space-y-8" aria-label="Categories Section">
      <header>
        <h1 className="text-xl font-bold">Categories</h1>
        <p className="text-gray-500 py-2 dark:text-gray-400">
          Browse meals by category {!loading && categories.length > 0 && (
            <span className="ml-1 text-sm text-gray-400">
              ({categories.length} categories)
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
          gap-4 lg:gap-5 "
          role="list"
          aria-label="Meal categories list"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.idCategory}
              category={category}
            />
          ))}
        </div>
      )}

      {!loading && categories.length === 0 && (
        <p className="text-center text-lg my-4 text-gray-500">
          No categories found 🍽️
        </p>
      )}
    </section>
  );
}
