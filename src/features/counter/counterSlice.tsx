// a slice splits redux state objects into multiple
// objects of state 
// a slice is a collection of objects 
// for example a blog might have a slice for posts
// and a seperate slice for comments 
// the logic of each are handled differently so 
// they each get a slice 

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}



export const counterSlice = createSlice( {
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { //these are our actions 
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1; 
        }
    }
});


export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer; // we can just import counterReducer and we will get this