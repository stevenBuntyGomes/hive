import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    settings: {},
    settingsBrouchar: null,
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

    getSettingsBroucharRequest: (state, action) => {
        state.loading = true;
    },
    getSettingsBroucharSuccess: (state, action) => {
        state.loading = false;
        state.settingsBrouchar = action.payload.data;
        state.message = action.payload.message;
    },
    getSettingsBroucharFailure: (state, action) => {
        state.loading = true;
    },
});