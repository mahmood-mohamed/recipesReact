import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const categoriesContext = createContext(null);

export default function CategoriesContext({ children }) {
  const [categoryName, setCategoryName] = useState([]);
  const [mealsData, setMealsData] = useState([]);
  const [allMealsData, setAllMealsData] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);

  useEffect(() => {
    getAllCategories();
    getAllMeals();
  }, []);

  async function getAllCategories() {
    try {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      setCategoryName(data.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function filterMealsByCategory(categoryName = "Side") {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      setMealsData(data.meals || []);
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  }

  async function getAllMeals() {
    try {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=s");
      setAllMealsData(data.meals || []);
      setMealsData(data.meals || []); // Initialize meals with all meals
    } catch (error) {
      console.error("Error fetching all meals:", error);
    }
  }


  async function getMealsDetails(id) {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setMealDetails(data.meals?.[0] || {}); // Set first meal object instead of array
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  }
  



  return (
    <categoriesContext.Provider value={{ categoryName, mealsData, allMealsData, mealDetails, filterMealsByCategory, getAllMeals, getMealsDetails }}>
    {children}
    </categoriesContext.Provider>
  );
}
