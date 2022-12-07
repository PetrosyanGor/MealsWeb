import React from 'react'
import {GiChicken,GiSheep} from 'react-icons/gi';
import {SiHappycow} from 'react-icons/si';
import {FaPiggyBank} from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Category = () => {


  const navigate = useNavigate();

  return (
    <div className='Category'>
      <div className='logo' onClick={()=>navigate("/category/chicken")}>
        <GiChicken className='i'/>
        <h4>Chicken</h4>
      </div>
      <div className='logo' onClick={()=>navigate("/category/lamb")}>
        <GiSheep className='i'/>
        <h4>Lamb</h4>
      </div>
      <div className='logo' onClick={()=>navigate("/category/beef")}>
        <SiHappycow className='i'/>
        <h4>Beef</h4>
      </div>
      <div className='logo' onClick={()=>navigate("/category/pork")}>
        <FaPiggyBank className='i'/>
        <h4>Pork</h4>
      </div>
    </div>
  )
}

export default Category