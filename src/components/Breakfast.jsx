import React, { useEffect, useState } from "react";
import { Splide , SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { useNavigate } from "react-router-dom";

const Breakfast = () => {

  const [Breakfast , setBreakfast] = useState([]);

  useEffect(() => {
    getBreakfast();
  }, []);

  const navigate = useNavigate();

  const getBreakfast = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    const data = await response.json();
    console.log(data.meals);
    setBreakfast(data.meals)
  };


  return (
    <div className="Breakfast">
    <div className="Wrapper">
      <h3>Breakfast</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"5rem"
      }}>
      {
        Breakfast.map(breakfast=>
          <SplideSlide key={breakfast.idMeal} >
          <div className="Card" onClick={()=>navigate('meals/' + breakfast.idMeal)}>
          <p>{breakfast.strMeal}</p>
          <img className="Gradient" src={breakfast.strMealThumb} />
          </div>
          </SplideSlide>
        )
      }
      </Splide>
       </div>
        </div>
  )
}

export default Breakfast