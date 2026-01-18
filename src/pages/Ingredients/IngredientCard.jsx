import { Link } from "react-router-dom";

export default function IngredientCard({ ingredient }) {
    return (
        <article
            className="
            bg-white dark:bg-gray-900
            rounded-xl overflow-hidden
            border dark:border-gray-800
            shadow-sm
            transition
            hover:shadow-lg
            "
        >
            <Link
            to={`/ingredients/${ingredient.strIngredient}`}
            className="group block h-full"
            aria-label={`Browse meals by ingredient ${ingredient.strIngredient}`}
            >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                <img
                    src={ingredient.strThumb}
                    alt={`${ingredient.strIngredient} ingredient`}
                    loading="lazy"
                    decoding="async"
                    className="
                    w-full h-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                    "
                />
                </div>

                {/* Content */}
                <div className="p-3 lg:p-4 text-center">
                    <h3
                        className="
                        font-semibold
                        text-gray-800 dark:text-gray-100
                        line-clamp-2
                        transition-colors duration-300
                        group-hover:text-orange-500 
                        "
                        title={ingredient.strIngredient}
                    >
                        {ingredient.strIngredient}
                    </h3>
                </div>
            </Link>
        </article>
    )
}
