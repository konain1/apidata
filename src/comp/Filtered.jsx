
import React from 'react'
import {useState,useMemo,useEffect} from 'react'

function Filtered({data}) {

    const [movies,setMovies] = useState([])
    

    useEffect(()=>{
        ratingData()
    },[])
   

    const ratingData = ()=>{

        let movies = data.filter((movie)=>{
            return movie.rating.average > 5.2
        })
        setMovies(movies)
        console.log(movies)
        }
       

       
  
   
   
  return (
    <div>
    {
        movies.map((movie,index)=>{
            return (
                <>
                <p>{movie.name}</p>
                <p>{movie.rating.average}</p>
                </>
            )
        })
    }
   
    </div>
  )
}

export default Filtered
