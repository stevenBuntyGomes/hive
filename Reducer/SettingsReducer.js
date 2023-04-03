import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    settings: {},
    loading: false,
    error: null,
    message: '',
};


export const settingsReducer = createReducer(initialState, {
    getSettingsRequest: (state, action) => {
        state.loading = true;
    },
    getSettingsSuccess: (state, action) => {
        state.loading = false;
        state.settings = action.payload.data;
        state.message = action.payload.message;
    },
    getSettingsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
    },
});