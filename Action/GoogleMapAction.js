import axios from "axios";
import { API } from "@/config";


export const getGoogleMapAction = () => async (dispatch) => {
    try{
        dispatch({type: "getGoogleMapRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/google-map`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getGoogleMapSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getGoogleMapFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


