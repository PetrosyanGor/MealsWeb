import React, { useEffect, useState } from "react";
import { Splide , SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { useNavigate } from "react-router-dom";


const Popular = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPupular();
  }, []);

  const navigate = useNavigate();

  const getPupular = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    console.log(data.categories);
    setCategories(data.categories);
  };

  return (
    <div className="Popular">
        <div className="Wrapper">
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"5rem"
          }}>
          {
            categories.map(category=>
              <SplideSlide key={category.idCategory} >
              <div className="Card" >
              <p>{category.strCategory}</p>
              <img className="Gradient" src={category.strCategoryThumb} onClick={()=>navigate('category/' + category.strCategory)}/>
              </div>
              </SplideSlide>
            )
          }
          </Splide>
           </div>
            </div>

  );
};

export default Popular;
