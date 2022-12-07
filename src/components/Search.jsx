import React, { useEffect, useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';

const Search = () => {

    const[input,setInput] = useState('');


    const navigate = useNavigate()

    const submitHandler = (e) =>{
      e.preventDefault();
      navigate('/category/' + input.toLowerCase())
    }
  

  return (
    <div className='Search'>
        <form onSubmit={submitHandler}>
            <div className='Main'>
            <input type='text' onChange={(e)=>setInput(e.target.value)}/>
            <BsSearch className='i'/>
            </div>
        </form>
    </div>
  )
}

export default Search