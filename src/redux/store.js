import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../featuresSlice/DataSlice";

export const store = configureStore({
    reducer:{
        movieReducer:dataSlice
    }
})