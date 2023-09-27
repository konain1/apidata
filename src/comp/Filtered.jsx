import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { useSelector, useDispatch } from 'react-redux';
import { getGenreRedcure } from '../featuresSlice/DataSlice';

function Filtered({ data }) {
  const [movies, setMovies] = useState(data);
  const [rating, setRating] = useState(1);

  const gen = useSelector((state) => state.movieReducer.getGenreMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    ratingData();
  }, [gen, data]);

  const ratingData = () => {
    const filteredMovies = data.filter((movie) => movie.rating.average > rating);
    const genreFilteredMovies =
      gen !== ''
        ? data.filter(
            (item) =>
              item.genres.includes(gen) ||
              item.genres.includes(gen) ||
              item.genres.includes(gen)
          )
        : data;

    setMovies(genreFilteredMovies.length ? genreFilteredMovies : filteredMovies);
  };
 

  return (
    <div>
      <DataCard data={movies} />
    </div>
  );
}

export default Filtered;
