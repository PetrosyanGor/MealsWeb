import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const MealsById = () => {

    const[meal,setMeal] = useState({})

    useEffect(()=>{
        getMeal();
    },[])

    const {id} = useParams()

    const getMeal = async()=>{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        return response.json().then(data=>{
            console.log(data.meals[0]);
            setMeal(data.meals[0])
        })
    }

  return (
    <div className='MealsById'>
        <h1>Name:{meal.strMeal}</h1>
        <img src={meal.strMealThumb}/>
        <h4>Area:{meal.strArea}</h4>
        <h4>Category:{meal.strCategory}</h4>
    </div>
  )
}

export default MealsById