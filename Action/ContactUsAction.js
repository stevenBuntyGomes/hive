import axios from "axios";
import { API } from "@/config";


export const sendContactAction = (firstName, lastName, phone, email, message) => async (dispatch) => {
    try{
        dispatch({type: "sendContactRequest"});
        const config = {
            headers: {
                "Accept": "/",
                "Content-Type": "application/json"
            },
        };
        const {data, status} = await axios.post(`${API}/contact-us`, {first_name: firstName, last_name: lastName, phone, email, message}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "sendContactSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "sendContactFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

export const removeContactMessageAction = (email) => async (dispatch) => {
    try{
        dispatch({type: "removeContactRequest"});
        const config = {
            headers: {
                "Accept": "/",
                "Content-Type": "application/json"
            },
        };
        const data = null;
        dispatch({
                type: "removeContactSuccess",
                payload: data,
            });
    }catch(error){
        dispatch({
            type: "removeContactFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


