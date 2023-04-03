import axios from "axios";
import { API } from "@/config";


export const getBrandAction = () => async (dispatch) => {
    try{
        dispatch({type: "getBrandRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/brands`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getBrandSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getBrandFailure",
            payload: "blog has not been created due to server error",
        });
    }
}



