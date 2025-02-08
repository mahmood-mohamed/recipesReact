import React, { useContext, useEffect, useState } from 'react'
import style from './MealDetails.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { categoriesContext } from '../../contexts/CategoriesContext'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


export default function MealDetails() {

  const { mealDetails, getMealsDetails, mealsData } = useContext(categoriesContext);
  const { id } = useParams(); // Get meal ID from the URL
  const navigate = useNavigate(); // لاستخدام التوجيه
  
  const [details, setDetails] = useState({});


  useEffect(() => {
    // 🔴 If ID is not number
    if (!id || isNaN(id)) {
      console.warn('Invalid Meal ID:', id);
      navigate('/not-found'); // 🔄 Go to Notfound Page
      return;
    }

    // ✅ If ID not valid in meals id
    const mealExists = mealsData.some(meal => meal.idMeal === id);
    if (!mealExists) {
      console.warn('Meal not found:', id);
      navigate('/not-found'); // 🔄 Go to Notfound Page
      return;
    }

    // ✅ If ID correct
    getMealsDetails(id);
  }, [id, mealsData, navigate, getMealsDetails]);

  useEffect(() => {
    if (mealDetails && Object.keys(mealDetails).length > 0) {
      setDetails(mealDetails);
    }
  }, [mealDetails]);

  // Extract ingredients dynamically
  const getIngredients = () => {
    if (!details || Object.keys(details).length === 0) return [];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = details[`strIngredient${i}`];
      const measure = details[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measure: measure || '' });
      }
    }
    return ingredients;
  };

  return (
    <>
      <div className='sm:flex flex-col sm:flex-row'>
        <Sidebar/>
        <div className='container py-6 gap-5 flex flex-col lg:flex-row lg:grid lg:grid-cols-3'>
          <div>
            <h1>{details.strMeal}</h1>
            <img src={details.strMealThumb} className='w-full rounded-xl' alt={details.strMeal}/>
            <div className='flex gap-3 justify-center py-4'>
              {details.strYoutube && (
                <a href={details.strYoutube} target='_blank' rel="noopener noreferrer"  className={style.btnDanger}>
                    <i className="fa-brands fa-youtube"></i>
                    Youtube
                </a>
              )}
              {details.strSource && (
                <a href={details.strSource} target='_blank' rel="noopener noreferrer"  className={style.btnSuccess}>
                  <i className="fa-solid fa-globe"></i>
                  Source
                </a>
              )}
            </div>
          </div>

          <div className='mt-12'>
            <p>{details.strInstructions || 'No instructions available.'}</p>
          </div>
          <div className='bg-white px-4 py-4 mt-3 rounded-xl'>
            <h2 className='font-bold text-2xl border-b-2 mb-4 py-1 border-gray-500'>Ingredients</h2>
            <ul className={style.ul}>
              { getIngredients().length > 0 ? (
                  getIngredients().map((item, index) => (
                    <li key={index} className={style.liItem}>
                      <span>{item.ingredient}:</span>
                      <span>{item.measure}</span>
                    </li>
                  ))
                ) : (
                  <li>No ingredients available.</li>
                )

              }
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
