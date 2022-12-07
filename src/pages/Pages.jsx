import React from 'react'
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import MealsByCategory from './MealsByCategory';
import MealsById from './MealsById';



const Pages = () => {
  return (
    <div className='Pages'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:name' element={<MealsByCategory/>}/>
        <Route path='/meals/:id' element={<MealsById/>}/>
      </Routes>
    </div>
  )
}

export default Pages