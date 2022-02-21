import { combineReducers } from "redux";
import productReducer from "../screen/HomeScreen/Modules/productReducer";
const rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;
