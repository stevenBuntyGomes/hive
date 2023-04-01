import axios from "axios";
import { API } from "@/config";


export const getAboutAction = () => async (dispatch) => {
    try{
        dispatch({type: "getActionRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/about`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getActionSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getActionFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


