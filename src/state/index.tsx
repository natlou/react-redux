// intention of redux is to have a single store for app

// configureStore creates a store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer, // available through provider
    }
})


// infer the RootState and AppDispatch types 
export type RootState = ReturnType<typeof store.getState>
// inferred type: { counter: CounterState }
export type AppDispatch = typeof store.dispatch; 

