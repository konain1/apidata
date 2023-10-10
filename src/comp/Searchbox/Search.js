import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSeacrhedMovie } from '../../featuresSlice/DataSlice';
import "./Search.css"


function Search() {

  const allGenresData = useSelector((state) => state.movieReducer.moviesData);
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [finalizedMovie, setFinalizedMovie] = useState('');



  const searchMovie = (query) => {
    const results = allGenresData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(query === '' ? [] : results);
  };
  const handleSearchChange = (event) => {
    dispatch(setSeacrhedMovie(''));
    const query = event.target.value;
    searchMovie(query);
  };


  const setSeachInBox = (event) => {
    const val = event.target.innerText;
    setFinalizedMovie(val);
    document.getElementById('inputSearchBox').value = val;
    setSearchResults([]);
  };

  const gotThatMovie = () => {
    // console.log(finalizedMovie);
    dispatch(setSeacrhedMovie(finalizedMovie));
    document.getElementById('inputSearchBox').value = '';

  };

  return (
    <div className='search'>
      
      <div className='searchBox'>
          <div>
          
          </div>
          <input
            type='text'
            autoComplete='false'
            placeholder='Movie Name'
            id='inputSearchBox'
            onChange={handleSearchChange}
          />
          <button className='searchBtn' onClick={gotThatMovie}>Search</button>
          <div className='search-result'>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result) => (
                  <li onClick={(e) => setSeachInBox(e)} className='searchLis' key={result.id}>{result.name}</li>
                ))}
              </ul>
            ) : (
              <p></p>
            )}
          </div>
        </div>

    </div>
  )
}

export default Search
