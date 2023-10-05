



import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { useSelector } from 'react-redux';
// import { getGenreRedcure } from '../featuresSlice/DataSlice';
import Pagination from './pagination/Pagination';

function Filtered({ data }) {
  const ratingSlice = useSelector((state) => state.movieReducer.RatingSlice);
  const gen = useSelector((state) => state.movieReducer.getGenreMovies);
  const searchedItem = useSelector((state) => state.movieReducer.SearchMovieStored);
  
  const [rating, setRating] = useState(ratingSlice);
  const [movies, setMovies] = useState(data);
  
  
  useEffect(() => {
    setRating(ratingSlice);
    console.log(ratingSlice)
    

    filterMovies();
  }, [gen, searchedItem, ratingSlice]);

  const filterMovies = () => {
    
    let filteredMovies = data.filter((movie) => movie.rating.average > rating);

    if (gen !== '') {
      filteredMovies = filteredMovies.filter((item) => item.genres.includes(gen));
    }

    if (searchedItem !== '') {

      filteredMovies = filteredMovies.filter((item) => item.name === searchedItem);
    }

    setMovies(filteredMovies);
  };
  useEffect(()=>{
    setMovies(data)
    console.log(movies)
  },[data])



  return (
    <div>
      <DataCard data={movies} />
      <Pagination moviesList={movies} />
    </div>
  );
}

export default Filtered;
