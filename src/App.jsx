
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import CategoriesContext from './contexts/CategoriesContext';
import MealDetails from './pages/MealDetails/MealDetails';

export default function App() {

  const router = createHashRouter([
    {path: '', element: <MainLayout/>, children: [
      {index: true, element: <Home/> },
      {path: '/category/:catName', element: <Home/>},
      {path: '/mealdetails/:id', element: <MealDetails/>},
      {path: '*', element: <NotFound/>}
    ]}
  ])

  return (
    <CategoriesContext>
      <RouterProvider router={router}/>
    </CategoriesContext>
  )
}

