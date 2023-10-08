import React, { useEffect,  useState } from 'react';
import { setRatingSlice } from '../../featuresSlice/DataSlice';
import { useDispatch,useSelector } from 'react-redux';

function RangeInput({ maxRange }) {
  
  const [value, setValue] = useState(maxRange);
  
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(setRatingSlice(value))
  },[value])

  console.log(maxRange + 'max')
  



  const handleRangeChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  return (
    <div>
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
  );
}

export default RangeInput;
