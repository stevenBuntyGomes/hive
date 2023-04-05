import axios from "axios";
import { API } from "@/config";


export const getDownloadAppAction = () => async (dispatch) => {
    try{
        dispatch({type: "getDownloadAppRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/our-app`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getDownloadAppSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getDownloadAppFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


