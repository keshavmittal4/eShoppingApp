// create slice
// initialize initial state
// slice -> name, mention initial state, mentioning all actions

import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            console.log(action);            
            state.push(action.payload);
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;