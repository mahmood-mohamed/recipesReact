import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import MealDetails from "./pages/MealDetails/MealDetails";
import Search from './pages/Search/Search';
import Categories from './pages/Categories/Categories';
import CategoryMeals from './pages/CategoryMeals/CategoryMeals';
import Areas from './pages/Areas/Areas';
import AreaMeals from './pages/AreaMeals/AreaMeals';
import NotFound from "./pages/NotFound/NotFound";
import Ingredients from './pages/Ingredients/Ingredients';
import IngredientMeals from './pages/IngredientMeals/IngredientMeals';
import RandomMeal from './pages/RandomMeal/RandomMeal';

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "meal-details/:id", element: <MealDetails /> },
        { path: "categories", element: <Categories /> },
        { path: "categories/:category", element: <CategoryMeals /> },
        { path: "areas", element: <Areas /> },
        { path: "areas/:area", element: <AreaMeals /> },
        { path: "ingredients", element: <Ingredients /> },
        { path: "ingredients/:ingredient", element: <IngredientMeals /> },
        { path: "search", element: <Search /> },
        { path: "random", element: <RandomMeal /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} >
      <Toaster position="bottom-right" reverseOrder={false} />
    </RouterProvider>
  )
}

