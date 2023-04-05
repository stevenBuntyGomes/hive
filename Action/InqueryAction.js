import axios from "axios";
import { API } from "@/config";


export const sendInqueryAction = (name, email, phone, address, services, budget, message) => async (dispatch) => {
    try{
        dispatch({type: "sendInqueryRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.post(`${API}/inquiry`, {name, email, phone, address, services, budget, message}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "sendInquerySuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "sendInqueryFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


export const removeInqueryAction = () => async (dispatch) => {
    try{
        dispatch({type: "removeInqueryRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        // const {data, status} = await axios.post(`${API}/inquiry`, {name, email, phone, address, services, budget, message}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        // if(status == 401){
        //     handleResponse(status);
        // }else{
            
        // }
        const data = null;
            dispatch({
                type: "removeInquerySuccess",
                payload: data,
            });
    }catch(error){
        dispatch({
            type: "removeInqueryFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

