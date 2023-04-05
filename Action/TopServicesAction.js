import axios from "axios";
import { API } from "@/config";


export const getTopServiceAction = () => async (dispatch) => {
    try{
        dispatch({type: "getTopServiceRequest"});
        const config = {
            headers: {
                "Accept": "application/json",
            },
        };
        const {data, status} = await axios.get(`${API}/top-services`, {}, config);
        // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
        if(status == 401){
            handleResponse(status);
        }else{
            dispatch({
                type: "getTopServiceSuccess",
                payload: data,
            });
        }
    }catch(error){
        dispatch({
            type: "getTopServiceFailure",
            payload: "blog has not been created due to server error",
        });
    }
}


// export const getSingleServiceAction = (id) => async (dispatch) => {
//     try{
//         dispatch({type: "getSingleServiceRequest"});
//         const config = {
//             headers: {
//                 "Accept": "application/json",
//             },
//         };
//         const {data, status} = await axios.get(`${API}/services/${id}`, {}, config);
//         // const {data, status} = await axios.post(`${API}/blog/createBlog`, formData, config);
//         if(status == 401){
//             handleResponse(status);
//         }else{
//             dispatch({
//                 type: "getSingleServiceSuccess",
//                 payload: data,
//             });
//         }
//     }catch(error){
//         dispatch({
//             type: "getSingleServiceFailure",
//             payload: "blog has not been created due to server error",
//         });
//     }
// }

