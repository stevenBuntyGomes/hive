import axios from "axios";
import { API } from "@/config";


export const getVideoAction = () => async (dispatch) => {
    try{
        dispatch({type: "getVideoRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/video`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getVideoSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getVideoFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


