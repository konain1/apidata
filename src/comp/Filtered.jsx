



import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { useSelector } from 'react-redux';
// import { getGenreRedcure } from '../featuresSlice/DataSlice';
import Pagination from './pagination/Pagination';
import "./Filtered.css"

function Filtered({ data ,toggle}) {

  const ratingSlice = useSelector((state) => state.movieReducer.RatingSlice);
  const gen = useSelector((state) => state.movieReducer.getGenreMovies);
  const searchedItem = useSelector((state) => state.movieReducer.SearchMovieStored);
  
  const [rating, setRating] = useState(ratingSlice);
  const [movies, setMovies] = useState(data);
  
  
  useEffect(() => {
    setRating(ratingSlice);
    // 

    filterMovies();
  }, [gen, searchedItem, ratingSlice]);

  const filterMovies = () => {
    
    
    let filteredMovies = data.filter((movie) => movie.rating.average > rating);

    if (gen.length) {
      filteredMovies = filteredMovies.filter((item) => item.genres.includes(gen));
    }

    if (searchedItem !== '') {

        filteredMovies = data.filter((item) => item.name === searchedItem);
    }

    // console.log({filteredMovies},{gen},{searchedItem})

    

    setMovies(filteredMovies);
  };
  useEffect(()=>{
    setMovies(data)
    // console.log(movies)
  },[data])



  return (
    <div className='filteredDataTransferDiv'>
      <DataCard data={movies}  toggle={toggle}/>
      <Pagination moviesList={movies} />
    </div>
  );
}

export default Filtered;
