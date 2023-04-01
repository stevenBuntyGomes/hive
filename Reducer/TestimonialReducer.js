import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    blog:{},
    message: null,
    loading: false,
    error: null,
    categories: [],
    tags: [],
    size: 0,
    searchBlog: [],
};


export const testimonialReducer = createReducer(initialState, {

});