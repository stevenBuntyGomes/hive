import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    banner: {},
    loading: false,
    error: null,
    message: '',
    banners: [],
};


export const bannerReducer = createReducer(initialState, {
    getBannerRequest: (state, action) => {
        state.loading = true;
    },
    getBannerSuccess: (state, action) => {
        state.loading = false;
        state.banners = action.payload.data;
        state.message = action.payload.message;
    },
    getBannerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});