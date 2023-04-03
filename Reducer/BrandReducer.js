import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    message: '',
    brands: [],
};


export const brandReducer = createReducer(initialState, {
    getBrandRequest: (state, action) => {
        state.loading = true;
    },
    getBrandSuccess: (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
        state.message = action.payload.message;
    },
    getBrandFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});