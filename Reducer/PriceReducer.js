import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    message: '',
    prices: [],
    price: {},
};


export const priceReducer = createReducer(initialState, {
    getPriceRequest: (state, action) => {
        state.loading = true;
    },
    getPriceSuccess: (state, action) => {
        state.loading = false;
        state.prices = action.payload.data;
        state.message = action.payload.message;
    },
    getPriceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },

    getSinglePriceRequest: (state, action) => {
        state.loading = true;
    },
    getSinglePriceSuccess: (state, action) => {
        state.loading = false;
        state.price = action.payload.data;
        state.message = action.payload.message;
    },
    getSinglePriceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});
