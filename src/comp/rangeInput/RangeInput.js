import React, { useEffect,  useState } from 'react';
import { setRatingSlice } from '../../featuresSlice/DataSlice';
import { useDispatch,useSelector } from 'react-redux';
import './RangeInput.css'



function RangeInput({ maxRange }) {
  
  const [value, setValue] = useState(maxRange);
  const allMoviesData = useSelector(state=>state.movieReducer.moviesData)
  
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(setRatingSlice(value))
  },[value])

  console.log(maxRange + 'max')
  



  const handleRangeChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  return (
    <>

    <div className='ratings'>
    
    </div>
        <div className='ratingScale'>
      <input 
        type="range" 
        min="1"
        max={maxRange}
        step="0.1"
        value={value}
       
        onChange={handleRangeChange}
      />
      <p>Rating: {value}</p>
    </div>
    </>
  
  );
}

export default RangeInput;
