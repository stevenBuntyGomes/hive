import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    message: null,
};


export const contactUsReducer = createReducer(initialState, {
    sendContactRequest: (state, action) => {
        state.loading = true;
    },
    sendContactSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    sendContactFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },

    removeContactRequest: (state, action) => {
        state.loading = true;
    },
    removeContactSuccess: (state, action) => {
        state.loading = false;
        state.message = null;
    },
    removeContactFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});