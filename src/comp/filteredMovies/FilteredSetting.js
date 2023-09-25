

import React, { useMemo } from 'react'
import './FilteredSetting.css'
import { useSelector } from 'react-redux'




function FilteredSetting({toggle}) {
  const allgenresData = useSelector(state => state.movieReducer.moviesData)

  const category = useMemo(() => {
    const uniqueGenres = new Set()
    allgenresData.forEach(item => {
      uniqueGenres.add(item.genres[1])
    })
    return Array.from(uniqueGenres)
  }, [allgenresData])

  console.log(category)
return (
  <div>
  {toggle === true ? <div className="filteredsetting">
      <div className='searchBox'>
        <div><h2>Searching...</h2></div>
        <input type='text' placeholder='movie Name' id='inputSearchBox' />
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
     
    </div>: <></> }
    
  </div>
);
}

export default FilteredSetting;