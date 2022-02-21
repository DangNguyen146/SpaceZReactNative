const initialState = {
    data:null,
    loading:false,
    err:null,
}
import * as ActionType from "../Modules/constant";

export default productReducer= (state = initialState, action) => {
  switch (action.type) {

  case ActionType.LIST_PRODUCT_REQUEST:
      state.data=null;
      state.loading=true;
      state.err=null;
      return {...state}
    case ActionType.LIST_PRODUCT_SUCCESS:
        state.data=action.payload;
        state.loading=false;
        state.err=false;
        return {...state}
    case ActionType.LIST_PRODUCT_FAILED:
        state.data=false;
        state.err=action.payload;
        state.loading=false;
        return {...state}



    

  default:
    return state
  }
}

