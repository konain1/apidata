import React from 'react'
import './MainContainer.css'
import { useState,useEffect } from "react";
import axios from 'axios'
import Filtered from '../Filtered'
// import DataCard from '../DataCard';
import SideNavbar from '../filteredMovies/SideNavbar';
import {useDispatch,useSelector} from 'react-redux';
import {addMovies} from '../../featuresSlice/DataSlice'




const url = 'https://api.tvmaze.com/shows'

function MainContainer() {

     
  
  const dispatch = useDispatch();
  
  // const [toggleFilter,setToggleFilter] = useState(true)
  
  
  useEffect(()=>{
    axios.get(url).then(res => {
      
      // setData(res.data.splice(0,29))
      dispatch(addMovies(res.data))
    }).catch(err => console.log(err))
  },[])
  
  const fetchMovies = useSelector(state=> state.movieReducer.moviesData)
  

    // const filterHandler = ()=>{
    //   console.log('toggle')
    //   setToggleFilter(!toggleFilter)
    // }



  return (
    <div className='maincontainer'>
    <div className='col-1'  >
    <SideNavbar />
    </div>
    <div className='col-2'>
    
    {/* <div className='toggle'><button onClick={filterHandler}>X</button></div> */}


    {fetchMovies.length > 0 ? (
      <Filtered key="filtered-component" data={fetchMovies}  />
    ) : (
      'loading .....'
    )}

    </div>


    </div>
  )
}

export default MainContainer
