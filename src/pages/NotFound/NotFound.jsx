import { Link } from "react-router-dom";
import RecipeBookImg from "/assets/recipe-book.png";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="mt-2 flex flex-col items-center justify-center px-4 text-center bg-gray-50 dark:bg-gray-900"
      aria-label="404 Not Found Page"
    >
      <img
        width={250}
        height={250}
        src={RecipeBookImg}
        alt="Page not found illustration"
        className="max-w-md mx-auto mb-8"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Oops! Page Not Found
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
        Looks like the page you are looking for doesn’t exist or has been moved. 
        Don’t worry, you can go back to the homepage and continue exploring delicious meals!
      </p>

      <Link
        to="/"
        className="
          inline-flex items-center gap-2
          bg-orange-500 hover:bg-orange-600
          text-white font-semibold
          px-6 py-3 rounded-lg
          transition
        "
      >
        Go Back Home <ArrowRight size={18} />
      </Link>
    </section>
  );
}
