import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    message: null,
};


export const inqueryReducer = createReducer(initialState, {
    sendInqueryRequest: (state, action) => {
        state.loading = true;
    },
    sendInquerySuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    sendInqueryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
    removeInqueryRequest: (state, action) => {
        state.loading = true;
    },
    removeInquerySuccess: (state, action) => {
        state.loading = false;
        state.message = null;
    },
    removeInqueryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});