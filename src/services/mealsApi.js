import api from "./axiosInstance";

// Search meals by name
export async function searchMeals(query) {
  if (!query?.trim()) return [];
  const { data } = await api.get(`/search.php?s=${query}`);
  return data?.meals || [];
}

// Filter meals by first letter
export async function getMealsByLetter(letter) {
  const { data } = await api.get(`/search.php?f=${letter}`);
  return data.meals;
}
// Get meal by id
export async function getMealById(id) {
  const { data } = await api.get(`/lookup.php?i=${id}`);
  return data.meals?.[0];
}

// List all categories
export async function getCategories() {
  const { data } = await api.get("/categories.php");
  return data.categories;
}
// Get meals by category
export async function getMealsByCategory(category) {
  const { data } = await api.get(`/filter.php?c=${category}`);
  return data.meals;
}

// List all areas
export async function getAreas() {
  const { data } = await api.get("/list.php?a=list");
  return data?.meals || [];
}
// Get meals by area
export async function getMealsByArea(area) {
  const { data } = await api.get(`/filter.php?a=${area}`);
  return data?.meals || [];
}

// List all ingredients
export async function getIngredients() {
  const { data } = await api.get("/list.php?i=list");
  return data?.meals || [];
}
// Get meals by ingredient
export async function getMealsByIngredient(ingredient) {
  const { data } = await api.get(`/filter.php?i=${ingredient}`);
  return data?.meals || [];
}

// Lookup a single random meal
export async function getRandomMeal() {
  const { data } = await api.get(`/random.php`);
  return data.meals?.[0] || null;
}

