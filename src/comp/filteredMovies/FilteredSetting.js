import React from 'react'
import './FilteredSetting.css'

import {useSelector} from 'react-redux'
import {useState} from 'react'

function FilteredSetting() {


  const [category,setCategory] = useState([])

// let category = []
  const allgenresData = useSelector(state=>state.movieReducer.moviesData)


  const puregenre = ()=>{
    allgenresData.map((item)=>{
      if(!category.includes(item.genres[0])){
        // category.push(item.genres[0])
        setCategory(item.genres[0])
      }
    })

    
  }
  console.log(allgenresData)

//  puregenre();




  
   
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
    <button onClick={puregenre}>get genre</button>
    {/* {category.map((genre,key)=>{
      return <p>{key}</p>
    })} */}


    </div>
     
    
      </div>
    </div>
  )
}

export default FilteredSetting
