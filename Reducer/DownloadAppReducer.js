import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    app: null,
};


export const downloadAppReducer = createReducer(initialState, {
    getDownloadAppRequest: (state, action) => {
        state.loading = true;
    },
    getDownloadAppSuccess: (state, action) => {
        state.loading = false;
        state.app = action.payload.data;
    },
    getDownloadAppFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
    // removeInqueryRequest: (state, action) => {
    //     state.loading = true;
    // },
    // removeInquerySuccess: (state, action) => {
    //     state.loading = false;
    //     state.message = null;
    // },
    // removeInqueryFailure: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    // },
});