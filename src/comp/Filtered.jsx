
import React from 'react'
import {useState,useEffect} from 'react'
import DataCard from './DataCard'

function Filtered({data}) {

    const [movies,setMovies] = useState([])
    const [genre,setGenre] = useState('')
    const [rating,setRating] = useState(1)



    

    useEffect(()=>{
        ratingData()
    },[data])
   

    const ratingData = ()=>{

        let moviesData = data.filter((movie)=>{
            return movie.rating.average > rating;
        })

        if(genre !== ''){
          let allFiltered = moviesData.filter((item)=>{
             return item.genres[0] === genre || item.genres[1] === genre || item.genres[2] === genre
         })
         setMovies(allFiltered)
        }else{
            setMovies(moviesData)
        }
    
   }
       

       
  
   
   
  return (
    <div>
    
    <DataCard data={movies} />

   
    </div>
  )
}

export default Filtered
