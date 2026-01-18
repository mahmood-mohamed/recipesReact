import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getAreas } from "../../services/mealsApi";
import { setPageMeta } from "../../utils/seo";
import AreasSkeleton from "./AreasSkeleton";

export default function Areas() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAreas() {
      try {
        setLoading(true);
        const data = await getAreas();
        setAreas(data || []);

        setPageMeta(
          "Meal Areas | Recipes Food",
          "Browse meals by country and region."
        );
      } catch (error) {
        toast.error(error.message || "Failed to load areas.");
      } finally {
        setLoading(false);
      }
    }

    fetchAreas();
  }, []);

  return (
    <section className="space-y-6" aria-label="Meal areas section">
      <header>
        <h1 className="text-xl font-bold">Meal Areas</h1>
        <p className="text-gray-500 py-2 dark:text-gray-400">
          Browse meals by country  {!loading && areas.length > 0 && (
            <span className="ml-1 text-sm text-gray-400">({areas.length} areas)</span>
          )}
        </p>
      </header>

      {loading ? (
        <AreasSkeleton/>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" aria-label="List of areas">
          {areas.length === 0 && (
            <p className="text-center text-gray-500">
              No areas found.
            </p>
          )}
          {areas.map((area) => (
            <Link
              key={area.strArea}
              to={`/areas/${area.strArea}`}
              className="
                bg-white dark:bg-gray-900
                p-4 rounded-xl text-center
                border dark:border-gray-800
                hover:shadow-md hover:-translate-y-0.5
                transition
                font-medium
              "
              aria-label={`Browse meals from ${area.strArea}`}
            >
              🌍 {area.strArea}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
