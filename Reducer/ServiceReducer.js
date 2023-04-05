import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    message: '',
    services: [],
    service: {},
    serviceCategories: []
};


export const serviceReducer = createReducer(initialState, {
    getServiceRequest: (state, action) => {
        state.loading = true;
    },
    getServiceSuccess: (state, action) => {
        state.loading = false;
        state.services = action.payload.data;
        state.message = action.payload.message;
    },
    getServiceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
    getSingleServiceRequest: (state, action) => {
        state.loading = true;
    },
    getSingleServiceSuccess: (state, action) => {
        state.loading = false;
        state.service = action.payload.data;
        state.message = action.payload.message;
    },
    getSingleServiceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },

    getServiceCategoryRequest: (state, action) => {
        state.loading = true;
    },
    getServiceCategorySuccess: (state, action) => {
        state.loading = false;
        state.serviceCategories = action.payload.data;
        state.message = action.payload.message;
    },
    getServiceCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});