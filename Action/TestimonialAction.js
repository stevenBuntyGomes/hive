import axios from "axios";
import { API } from "@/config";


export const getTestimonialAction = () => async (dispatch) => {
    try{
        dispatch({type: "getTestimonialRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/testimonials`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getTestimonialSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getTestimonialFailure",
            payload: "blog has not been created due to server error",
        });
    }
}

