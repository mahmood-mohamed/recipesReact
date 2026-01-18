import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <article
      className="
        bg-white dark:bg-gray-900
        rounded-xl overflow-hidden
        border dark:border-gray-800
        transition  
        shadow-sm hover:shadow-md
      "
    >
      <Link
        to={`/categories/${category.strCategory}`}
        aria-label={`Explore meals in ${category.strCategory} category`}
        className="group block h-full"
      >
        <img
          src={category.strCategoryThumb}
          alt={category.strCategory}
          loading="lazy"
          className="w-full aspect-square object-cover
            group-hover:scale-105
            transition-transform duration-300
          "
        />

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors duration-300" title={category.strCategory}>
            {category.strCategory}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {category.strCategoryDescription || "Explore delicious meals in this category."}
          </p>
        </div>
      </Link>
    </article>
  );
}
