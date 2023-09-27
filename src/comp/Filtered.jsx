
import React from 'react'
import {useState,useEffect} from 'react'
import DataCard from './DataCard'
import { useSelector,useDispatch } from 'react-redux'
import { getGenreRedcure } from '../featuresSlice/DataSlice'

function Filtered({data}) {

    const [movies,setMovies] = useState([])
    const [genre,setGenre] = useState('')
    const [rating,setRating] = useState(1)

  const gen = useSelector(state=>state.movieReducer. getGenreMovies)

    const dispatch = useDispatch()

    useEffect(()=>{
        ratingData()
    })
    


    const ratingData = ()=>{
        // dispatch(getGenreRedcure(''))
        let moviesData = data.filter((movie)=>{
            return movie.rating.average > rating;
        })

        if(gen !== ''){
          let allFiltered = moviesData.filter((item)=>{
             return item.genres[0] === gen || item.genres[1] === gen || item.genres[2] === gen
         })
         setMovies(allFiltered)
        }else{
            setMovies(moviesData)
        }
    
   }
       

       
  
   console.log(gen.length)
   
  return (
    <div>
      <DataCard data={movies} />

   
    </div>
  )
}

export default Filtered
