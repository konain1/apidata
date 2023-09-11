
import React from 'react'
import {useState,useEffect} from 'react'
import DataCard from './DataCard'

function Filtered({data}) {

    const [movies,setMovies] = useState([])
    

    useEffect(()=>{
        ratingData()
    },[data])
   

    const ratingData = ()=>{

        let movies = data.filter((movie)=>{
            return movie.rating.average > 7.2
        })
        setMovies(movies)
        // console.log(movies)
        }
       

       
  
   
   
  return (
    <div>
    
    <DataCard data={movies} />
   
    </div>
  )
}

export default Filtered
