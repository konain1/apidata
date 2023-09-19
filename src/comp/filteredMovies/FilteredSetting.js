import React from 'react'
import './FilteredSetting.css'

function FilteredSetting() {
  return (
    <div>
    <div className="filteredsetting">

    <div className='searchBox'>
    <div><h2>Search Movies</h2></div>

      <input type='text'  placeholder='movieName' id='inputSearchBox' />
      <button className='searchBtn'>Search</button>
    </div>

    {/* genre  */}

    <div className='genreBox'>

      
    </div>
     
    
      </div>
    </div>
  )
}

export default FilteredSetting
