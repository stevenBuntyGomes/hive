import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    video: {},
    loading: false,
    error: null,
    message: '',
};


export const videoLinkReducer = createReducer(initialState, {
    getVideoRequest: (state, action) => {
        state.loading = true;
    },
    getVideoSuccess: (state, action) => {
        state.loading = false;
        state.video = action.payload.data;
        state.message = action.payload.message;
    },
    getVideoFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});