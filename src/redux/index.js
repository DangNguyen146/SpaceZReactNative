import { combineReducers } from "redux";

import contentReducer from "./../screen/ProfileOnlineScreen/CreateProfile/modules/reducer";
import contentReducerEdit from "../screen/ProfileOnlineScreen/EditProfile/modules/reducer";

const rootReducer = combineReducers({
  contentReducer,
  contentReducerEdit,
});

export default rootReducer;
