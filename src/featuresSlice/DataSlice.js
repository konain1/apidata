
import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    moviesData:[],
    pageindex:0,
    getGenreMovies:[],
    SearchMovieStored:''
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
        }
    }
})

export const {addMovies,pagination,getGenreRedcure,setSeacrhedMovie} = dataSlice.actions;
export default dataSlice.reducer;