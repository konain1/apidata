
import { createSlice} from '@reduxjs/toolkit'



const initialState = {
    moviesData:[]
}

const dataSlice = createSlice({
    
    name:'dataSlice',
    initialState,
    reducers:{

        addMovies:(state,{payload})=>{
            state.moviesData = payload
        }
    }
})

export const {addMovies} = dataSlice.actions;
export default dataSlice.reducer;