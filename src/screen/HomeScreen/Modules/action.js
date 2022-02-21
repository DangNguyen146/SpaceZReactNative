import * as ActionType from "../Modules/constant";
import { mainApi } from "../../../axios/API";
export const actListProductApi=()=>{
    return (dispatch)=>{
        dispatch(actListProductRequest());
        mainApi.get("/product")
        .then((result)=>{
            // console.log(result.data);
            dispatch(actListProductSuccess(result.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(actListProductFailed(err));
        })
    }
}

const actListProductRequest=()=>{
    return {
        type:ActionType.LIST_PRODUCT_REQUEST,
    }   
};
const actListProductSuccess=(data)=>{
    return {
        type:ActionType.LIST_PRODUCT_SUCCESS,
        payload:data,
    }
}
const actListProductFailed=(err)=>{
    return {
        type:ActionType.LIST_PRODUCT_FAILED,
        payload:err
    }
}