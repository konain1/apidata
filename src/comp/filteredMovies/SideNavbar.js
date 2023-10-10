import React, { useEffect, useMemo, useState } from 'react';
import './SideNavbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { getGenreRedcure, setRatingSlice, setSeacrhedMovie } from '../../featuresSlice/DataSlice';
import RangeInput from '../rangeInput/RangeInput';

function SideNavbar({ toggle }) {

  const allGenresData = useSelector((state) => state.movieReducer.moviesData);
  const ratingData = useSelector(state=>state.movieReducer.RatingSlice)
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [finalizedMovie, setFinalizedMovie] = useState('');
  const [ maxRange, setMaxRange ] = useState(0);

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
    dispatch(setSeacrhedMovie('')); // Reset searchmovie
    // dispatch(setRatingSlice(1.0))   // reset rating
    // setMaxRange(1)

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
    // console.log(finalizedMovie);
    dispatch(setSeacrhedMovie(finalizedMovie));
    document.getElementById('inputSearchBox').value = '';

  };

  // console.log({allGenresData} )
  useEffect(() => {
    let maxRat = 0
    allGenresData.forEach(movie => {
      if(movie.rating.average > maxRat) {
        maxRat = movie.rating.average;
        console.log('rat' + maxRat)
       
      }
    })
    console.log('maxRat = ' + maxRat)
    setMaxRange(maxRat)
  },[allGenresData])


  return (
    <div>
      <div className={filteredSettingClass}>
        {/* <div className='searchBox'>
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
        </div> */}
        <div className='mainbox'>
          <button className='resetFilter' onClick={resetFilters}>Reset Filters</button>
          <div className='genreBox'>
          <h2 style={{color:'white'}}>Genres</h2>
            {category.map((genre, key) => {
              if (genre !== undefined) {
                return (<div className='categoryDiv'>
                <input type='radio'  onClick={(e)=> getGenre(genre)} name='genre'/>
                  {/* <button onClick={(e) => getGenre(genre)} key={key}>
                    {genre}
                  </button> */}
                  <span key={key} >{genre}</span>
                </div>
                 
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className='ratingRange'>
        <RangeInput maxRange={maxRange}/> 
        </div>
        

      </div>
    </div>
  );
}

export default SideNavbar;
