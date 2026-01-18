import MealCard from "../MealCard/MealCard";

export default function MealsGrid({ meals }) {
  return (
    <div
      className="grid 
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-4 
        lg:gap-5
      "
      aria-label="List of meals"
    >
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
