import axios from "axios";
import { API } from "@/config";


export const sendSubscribeAction = (email) => async (dispatch) => {
    try{
        dispatch({type: "sendSubscribeRequest"});
        const config = {
            headers: {
                "Accept": "/",
                "Content-Type": "application/json"
            },
        };
        const {data, status} = await axios.post(`${API}/subscribe`, {email}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "sendSubscribeSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "sendSubscribeFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

export const removeMessageAction = (email) => async (dispatch) => {
    try{
        dispatch({type: "removeSubscribeRequest"});
        const config = {
            headers: {
                "Accept": "/",
                "Content-Type": "application/json"
            },
        };
        // const {data, status} = await axios.post(`${API}/subscribe`, {email}, config);
        // // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        // if(status == 401){
        //     handleResponse(status);
        // }else{
            
        // }
        const data = null;
        dispatch({
                type: "removeSubscribeSuccess",
                payload: data,
            });
    }catch(error){
        dispatch({
            type: "removeSubscribeFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


