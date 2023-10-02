import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { useSelector } from 'react-redux';
import { getGenreRedcure } from '../featuresSlice/DataSlice';
import { useMemo } from 'react';
import Pagination from './pagination/Pagination';





function Filtered({ data }) {
  const [movies, setMovies] = useState(data);
  const [rating, setRating] = useState(1);
  // const [pageNo,setPageNo] = useState()


  const gen = useSelector((state) => state.movieReducer.getGenreMovies);
  const searchedItem = useSelector(state=> state.movieReducer.SearchMovieStored)

  useEffect(() => {
    ratingAndGenreData();
    console.log(searchedItem)

  }, [gen, data]);

  const ratingAndGenreData = () => {
    const filteredMovies = data.filter((movie) => movie.rating.average > rating);
    const genreFilteredMovies = gen !== ''
        ? data.filter(
            (item) =>
              item.genres.includes(gen) ||
              item.genres.includes(gen) ||
              item.genres.includes(gen)
          )
        : data;

        console.log(genreFilteredMovies)
      setMovies(genreFilteredMovies.length ? genreFilteredMovies : filteredMovies);
    
  };
  
  
  
  

  return (
    <div>
      <DataCard data={movies} />
      <Pagination moviesList={movies} />
    </div>
  );
}

export default Filtered;
