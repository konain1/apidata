import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { useSelector } from 'react-redux';
import { getGenreRedcure } from '../featuresSlice/DataSlice';
import { useMemo } from 'react';
import Pagination from './pagination/Pagination';





function Filtered({ data }) {
  const [movies, setMovies] = useState(data);

const ratingSlice = useSelector(state=> state.movieReducer.RatingSlice)
  const gen = useSelector((state) => state.movieReducer.getGenreMovies);

  const searchedItem = useSelector(state=> state.movieReducer.SearchMovieStored)
  const [rating, setRating] = useState(ratingSlice);


  useEffect(() => {
    setRating(ratingSlice)
    ratingAndGenreData();
    console.log(rating)

  }, [gen, data,searchedItem,ratingSlice]);

  const ratingAndGenreData = () => {
    const filteredMovies = data.filter((movie) => movie.rating.average > rating);

    const filterSearchedItem = data.filter((movie)=> movie.name === searchedItem)

    
    const genreFilteredMovies = gen !== ''
        ? filteredMovies.filter(
            (item) =>
              item.genres.includes(gen )  ||
              item.genres.includes(gen )  ||
              item.genres.includes(gen )
          )
        : data;

        // console.log(genreFilteredMovies)
     searchedItem === '' ? setMovies(genreFilteredMovies.length ? genreFilteredMovies : filteredMovies) : setMovies(filterSearchedItem)
    
    // searchedItem === '' ? setMovies(genreFilteredMovies): setMovies(filterSearchedItem);
  };
  
  
  
  

  return (
    <div>
      <DataCard data={movies} />
      <Pagination moviesList={movies} />
    </div>
  );
}

export default Filtered;
