
import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    moviesData:[],
    pageindex:0,
    getGenreMovies:[],
    SearchMovieStored:'',
    RatingSlice:1.0
}


const dataSlice = createSlice({
   
    name:'dataSlice',
    initialState,
    reducers:{

        addMovies:(state,{payload})=>{
            state.moviesData = payload
        },
        pagination:(state,{payload})=>{
            state.pageindex = payload
        },
        getGenreRedcure:(state,action)=>{
            state.getGenreMovies = action.payload
        },
        setSeacrhedMovie:(state,action)=>{
            state.SearchMovieStored = action.payload
        },
        setRatingSlice:(state,action)=>{
            state.RatingSlice=action.payload
        }

    }
})

export const {addMovies,pagination,getGenreRedcure,setSeacrhedMovie,setRatingSlice} = dataSlice.actions;
export default dataSlice.reducer;