import React from 'react'
import './MainContainer.css'
import { useState,useEffect } from "react";
import axios from 'axios'
import Filtered from '../Filtered'
// import DataCard from '../DataCard';
import FilteredSetting from '../filteredMovies/FilteredSetting';
import {useDispatch,useSelector} from 'react-redux';
import {addMovies} from '../../featuresSlice/DataSlice'




const url = 'https://api.tvmaze.com/shows'

function MainContainer() {

     
        const fetchMovies = useSelector(state=> state.movieReducer.moviesData)

    const dispatch = useDispatch();


    // const [data,setData] = useState([])

    useEffect(()=>{
      axios.get(url).then(res => {
        
        // setData(res.data.splice(0,29))
        dispatch(addMovies(res.data))
      }).catch(err => console.log(err))
    },[])
  
  

    // console.log(fetchMovies)



  return (
    <div className='maincontainer'>
    <div className='col-1'>
    <FilteredSetting/>
    </div>
    <div className='col-2'>

    { fetchMovies.length > 0 ? <Filtered data={fetchMovies}/>  : 'loading .....'} 

    </div>

    </div>
  )
}

export default MainContainer
