import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    about: {},
    loading: false,
    error: null,
    message: '',
};


export const aboutReducer = createReducer(initialState, {
    getActionRequest: (state, action) => {
        state.loading = true;
    },
    getActionSuccess: (state, action) => {
        state.loading = false;
        state.about = action.payload.data;
        state.message = action.payload.message;
    },
    getActionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});