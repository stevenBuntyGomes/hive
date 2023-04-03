import axios from "axios";
import { API } from "@/config";


export const getBannerAction = () => async (dispatch) => {
    try{
        dispatch({type: "getBannerRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/banners`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getBannerSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getBannerFailure",
            payload: "blog has not been created due to server error",
        });
    }
}



