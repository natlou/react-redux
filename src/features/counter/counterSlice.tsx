// a slice splits redux state objects into multiple
// objects of state 
// a slice is a collection of objects 
// for example a blog might have a slice for posts
// and a seperate slice for comments 
// the logic of each are handled differently so 
// they each get a slice 

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state';

// Define a type for the slice state
interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { //these are our actions 
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1; 
        },
        // use the payload action type to declare the contents of
        // action.payload as number 
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer; // we can just import counterReducer and we will get this

