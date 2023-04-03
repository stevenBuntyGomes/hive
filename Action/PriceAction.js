import axios from "axios";
import { API } from "@/config";


export const getPriceAction = () => async (dispatch) => {
    try{
        dispatch({type: "getPriceRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/prices`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getPriceSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getPriceFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

// get single price starts
export const getSinglePriceAction = (id) => async (dispatch) => {
    try{
        dispatch({type: "getSinglePriceRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/prices/${id}`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getSinglePriceSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getSinglePriceFailure",
            payload: "blog has not been created due to server error",
        });
    }
}
// get single price ends



