import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MealsByCategory = () => {
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    getBeefMeals();
  }, []);

  const { name } = useParams();

  const getBeefMeals = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name
    );
    const data = await response.json();
    console.log(data);
    setMeals(data.meals);
  };

  return (
    <div className="Main">
      <button className="btn" onClick={()=>navigate(-1)}>Go Back</button>
      <div className="MealsByCategory">
        {meals.map((el) => (
          <div className="Meals" key={el.idMeal}>
            <img src={el.strMealThumb} />
            <h4>{el.strMeal}</h4>
            <button className="btn" onClick={()=>navigate('/meals/' + el.idMeal)}>More detials</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsByCategory;
