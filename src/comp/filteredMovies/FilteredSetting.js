

import React, { useMemo } from 'react'
import './FilteredSetting.css'
import { useSelector } from 'react-redux'

function FilteredSetting() {
  const allgenresData = useSelector(state => state.movieReducer.moviesData)

  const category = useMemo(() => {
    const uniqueGenres = new Set()
    allgenresData.forEach(item => {
      uniqueGenres.add(item.genres[0])
    })
    return Array.from(uniqueGenres)
  }, [allgenresData])

return (
  <div>
    <div className="filteredsetting">
      <div className='searchBox'>
        <div><h2>Search Movies</h2></div>
        <input type='text' placeholder='movieName' id='inputSearchBox' />
        <button className='searchBtn'>Search</button>
      </div>
  <div className='mainbox'>
  <h2>Genre</h2>
       <div className='genreBox'>
        {/* <button onClick={puregenre}>get genre</button> */}
        {category.map((genre, key) => {
          return <button key={key}>{genre}</button>;
        })}
      </div>
  </div>
     
    </div>
  </div>
);
}

export default FilteredSetting;