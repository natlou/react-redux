// intention of redux is to have a single store for app

// configureStore creates a store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

