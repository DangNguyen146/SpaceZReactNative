import { combineReducers } from "redux";

import contentReducer from "./../screen/ProfileOnlineScreen/CreateProfile/modules/reducer";

const rootReducer = combineReducers({
  contentReducer,
});

export default rootReducer;
