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

  }, [gen, data,searchedItem]);

  const ratingAndGenreData = () => {
    const filteredMovies = data.filter((movie) => movie.rating.average > rating);

    const filterSearchedItem = data.filter((movie)=> movie.name === searchedItem)

    
    const genreFilteredMovies = gen !== ''
        ? filteredMovies.filter(
            (item) =>
              item.genres.includes(gen)  ||
              item.genres.includes(gen)  ||
              item.genres.includes(gen)
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
