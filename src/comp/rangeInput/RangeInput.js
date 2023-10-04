import React, { useEffect, useMemo, useState } from 'react';
import { setRatingSlice } from '../../featuresSlice/DataSlice';
import { useDispatch } from 'react-redux';

function RangeInput() {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(setRatingSlice(value))

  },[value])

  const handleRangeChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={value}
        onChange={handleRangeChange}
      />
      <p>Rating: {value}</p>
    </div>
  );
}

export default RangeInput;
