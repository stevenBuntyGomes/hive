import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    message: '',
    testimonials: [],
    service: {},
};


export const testimonialReducer = createReducer(initialState, {
    getTestimonialRequest: (state, action) => {
        state.loading = true;
    },
    getTestimonialSuccess: (state, action) => {
        state.loading = false;
        state.testimonials = action.payload.data;
        state.message = action.payload.message;
    },
    getTestimonialFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});