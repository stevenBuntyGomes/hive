import axios from "axios";
import { API } from "@/config";


export const getServiceAction = () => async (dispatch) => {
    try{
        dispatch({type: "getServiceRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/services`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getServiceSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getServiceFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


export const getSingleServiceAction = (id) => async (dispatch) => {
    try{
        dispatch({type: "getSingleServiceRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/services/${id}`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getSingleServiceSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getSingleServiceFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


// service category action
export const getServiceCategoryAction = () => async (dispatch) => {
    try{
        dispatch({type: "getServiceCategoryRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/categories`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getServiceCategorySuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getServiceCategoryFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

// service category action
