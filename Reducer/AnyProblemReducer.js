import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    anyProblem: {},
    loading: false,
    error: null,
    message: '',
};


export const anyProblemReducer = createReducer(initialState, {
    getAnyProblemRequest: (state, action) => {
        state.loading = true;
    },
    getAnyProblemSuccess: (state, action) => {
        state.loading = false;
        state.anyProblem = action.payload.data;
        state.message = action.payload.message;
    },
    getAnyProblemFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});




