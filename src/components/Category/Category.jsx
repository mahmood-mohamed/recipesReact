import { useContext, useEffect, useState } from "react";
import style from "./Category.module.scss";
import { NavLink } from "react-router-dom";
import Meals from "../Meals/Meals";
import { categoriesContext } from "./../../contexts/CategoriesContext";

export default function Category() {
  const { categoryName, allMealsData, filterMealsByCategory } = useContext(categoriesContext);
  const [meals, setMeals] = useState([]);

  // Fetch all meals initially
  useEffect(() => {
    if (Array.isArray(allMealsData)) {
      setMeals(allMealsData);
    }
  }, [allMealsData]);

  // Fetch meals for a specific category
  async function getMeals(category) {
    if (category === "All") {
      setMeals(allMealsData);
    } else {
      const filteredMeals = await filterMealsByCategory(category);
      setMeals(filteredMeals || []);
    }
  }

  if (!Array.isArray(categoryName) || categoryName.length === 0) {
    return <div className="loading">Loading categories...</div>;
  }

  return (
    <div className="px-2">
      {/* Dropdown for small screens */}
      <select
        className="md:hidden w-full px-3 py-2 rounded-md"
        onChange={(e) => getMeals(e.target.value)}
      >
        <option value="All">All</option>
        {categoryName.map((item) => (
          <option key={item.idCategory} value={item.strCategory}>
            {item.strCategory}
          </option>
        ))}
      </select>

      {/* Category list for larger screens */}
      <div className="hidden md:block">
        <ul className={style.category}>
          <NavLink
            className={({ isActive }) => `${style.item} ${isActive ? style.active : ""}`}
            to="/"
            onClick={() => getMeals("All")}
          >
            <li>All</li>
          </NavLink>
          {categoryName.map((item) => (
            <NavLink
              key={item.idCategory}
              className={({ isActive }) => `${style.item} ${isActive ? style.active : ""}`}
              to={`/category/${item.strCategory}`}
              onClick={() => getMeals(item.strCategory)}
            >
              <li>{item.strCategory}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Meals display */}
      <section className="p-3 pt-10">
        {meals.length === 0 ? (
          <div className="loading">No meals found.</div>
        ) : (
          <div className="grid gap-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Meals meals={meals} />
          </div>
        )}
      </section>
    </div>
  );
}
