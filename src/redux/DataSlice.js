
import { createSlice} from '@reduxjs/toolkit'


const initialState = [
    {
        moviesData:[]
    }
]
const dataSlice = createSlice({
    
    name:'dataSlice'
})

export default dataSlice.reducer;