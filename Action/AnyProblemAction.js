import axios from "axios";
import { API } from "@/config";


export const getAnyProblemAction = () => async (dispatch) => {
    try{
        dispatch({type: "getAnyProblemRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/any-problem`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getAnyProblemSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getAnyProblemFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


