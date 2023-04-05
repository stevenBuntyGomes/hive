import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    map: {},
    loading: false,
    error: null,
    message: '',
};


export const googleMapReducer = createReducer(initialState, {
    getGoogleMapRequest: (state, action) => {
        state.loading = true;
    },
    getGoogleMapSuccess: (state, action) => {
        state.loading = false;
        state.map = action.payload.data;
        state.message = action.payload.message;
    },
    getGoogleMapFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});