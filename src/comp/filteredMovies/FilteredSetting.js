import React, { useMemo, useState } from 'react';
import './FilteredSetting.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGenreRedcure, setSeacrhedMovie } from '../../featuresSlice/DataSlice';

function FilteredSetting({ toggle }) {
  const allGenresData = useSelector((state) => state.movieReducer.moviesData);
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [finalizedMovie, setFinalizedMovie] = useState('');

  const category = useMemo(() => {
    const uniqueGenres = new Set();
    allGenresData.forEach((item) => {
      uniqueGenres.add(item.genres[1]);
    });
    return Array.from(uniqueGenres);
  }, [allGenresData]);

  const filteredSettingClass = toggle ? 'filteredsetting active' : 'filteredsetting';

  const getGenre = (ge) => {
    dispatch(getGenreRedcure(ge));
  };

  const resetFilters = () => {
    dispatch(getGenreRedcure('')); // Reset genre selection
    dispatch(setSeacrhedMovie(''));

  };

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
    console.log(finalizedMovie);
    dispatch(setSeacrhedMovie(finalizedMovie));
    document.getElementById('inputSearchBox').value = '';

  };

  return (
    <div>
      <div className={filteredSettingClass}>
        <div className='searchBox'>
          <div>
            <h2>Searching...</h2>
          </div>
          <input
            type='text'
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
        <div className='mainbox'>
          <button className='resetFilter' onClick={resetFilters}>Reset Filters</button>
          <div className='genreBox'>
            {category.map((genre, key) => {
              if (genre !== undefined) {
                return (
                  <button onClick={(e) => getGenre(genre)} key={key}>
                    {genre}
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredSetting;
