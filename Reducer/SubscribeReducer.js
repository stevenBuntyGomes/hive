import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    subscribe: {},
    message: null,
    error: null 
};


export const subscribeReducer = createReducer(initialState, {
    sendSubscribeRequest: (state, action) => {
        state.loading = true;
    },
    sendSubscribeSuccess: (state, action) => {
        state.loading = false;
        state.subscribe = action.payload.data;
        state.message = action.payload.message;
    },
    sendSubscribeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
    removeSubscribeRequest: (state, action) => {
        state.loading = true;
    },
    removeSubscribeSuccess: (state, action) => {
        state.loading = false;
        state.message = null;
    },
    removeSubscribeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});