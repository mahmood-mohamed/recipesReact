import React, { useContext } from 'react';
import style from './Meals.module.scss';
import { Link } from 'react-router-dom';
import { categoriesContext } from './../../contexts/CategoriesContext';

export default function Meals({ meals = [] }) {
  const { getMealsDetails } = useContext(categoriesContext);

  function getDetails(id) {
    getMealsDetails(id);
  }

  if (!meals.length) {
    return <div className="loading">No meals found.</div>;
  }

  return (
    <>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={style.card}>
          <figure>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="mx-auto object-cover"
            />
          </figure>
          <h3>{meal.strMeal}</h3>

          {meal.strArea && (
            <p title='Area'>
              <i className="fa-solid fa-earth-africa pe-3"></i>
              {meal.strArea}
            </p>
          )}

          <Link
            to={`/mealdetails/${meal.idMeal}`}
            className={style.btnSuccess}
            onClick={() => getDetails(meal.idMeal)}
          >
            View Recipe
          </Link>
        </div>
      ))}
    </>
  );
}
