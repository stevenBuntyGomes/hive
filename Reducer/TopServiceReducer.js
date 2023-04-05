import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    message: '',
    topServices: [],
    service: {},
};


export const topServiceReducer = createReducer(initialState, {
    getTopServiceRequest: (state, action) => {
        state.loading = true;
    },
    getTopServiceSuccess: (state, action) => {
        state.loading = false;
        state.topServices = action.payload.data;
        state.message = action.payload.message;
    },
    getTopServiceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});