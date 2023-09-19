
import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    moviesData:[],
    pageindex:0
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
        }
    }
})

export const {addMovies,pagination} = dataSlice.actions;
export default dataSlice.reducer;