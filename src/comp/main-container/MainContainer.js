import React from 'react'
import './MainContainer.css'
import { useState,useEffect } from "react";
import axios from 'axios'
import Filtered from '../Filtered'
import DataCard from '../DataCard';
import FilteredSetting from '../filteredMovies/FilteredSetting';
const url = 'https://api.tvmaze.com/shows'


function MainContainer() {

    const [data,setData] = useState([])

    useEffect(()=>{
      axios.get(url).then(res => {
        
        setData(res.data.splice(0,29))
      }).catch(err => console.log(err))
    },[])
  
  



  return (
    <div className='maincontainer'>
    <div className='col-1'>
    <FilteredSetting/>
    </div>
    <div className='col-2'>

    { data.length > 0 ? <Filtered data={data}/>  : 'loading .....'} 

    </div>

    </div>
  )
}

export default MainContainer
