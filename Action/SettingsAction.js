import axios from "axios";
import { API } from "@/config";


export const getSettingsAction = () => async (dispatch) => {
    try{
        dispatch({type: "getSettingsRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/settings`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getSettingsSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getSettingsFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


export const getSettingsBroucharAction = (id) => async (dispatch) => {
    try{
        dispatch({type: "getSettingsBroucharRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/settings/brochure/${id}`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getSettingsBroucharSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getSettingsBroucharFailure",
            payload: "blog has not been created due to server error",
        });
    }
}




