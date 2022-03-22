import { combineReducers } from "redux";

import contentReducer from "./../screen/ProfileOnlineScreen/CreateProfile/modules/reducer";
import contentReducerEdit from "../screen/ProfileOnlineScreen/EditProfile/modules/reducer";

import listLogoCreateMTReducer from "../container/CreateCardScreenMT/Logo/modules/reducer";
import listBackgroundCreateMTReducer from "../container/CreateCardScreenMT/Background/modules/reducer";
import listNameCreateMTReducer from "../container/CreateCardScreenMT/Name/modules/reducer";
import listQrCreateMTReducer from "../container/CreateCardScreenMT/QrCard/modules/reducer";

import listLogoCreateMSReducer from "../container/CreateCardScreenMS/Logo/modules/reducer";
import listBackgroundCreateMSReducer from "../container/CreateCardScreenMS/Background/modules/reducer";
import listNameCreateMSReducer from "../container/CreateCardScreenMS/Name/modules/reducer";
import listQrCreateMSReducer from "../container/CreateCardScreenMS/QrCard/modules/reducer";

import listNameCardCreateMSReducer from "../screen/HomeScreen/modules/reducer";
import listCardEditReducer from "../screen/HomeScreen/EditCard/modules/reducer";

const rootReducer = combineReducers({
  contentReducer,
  contentReducerEdit,
  listLogoCreateMTReducer,
  listBackgroundCreateMTReducer,
  listNameCreateMTReducer,
  listQrCreateMTReducer,

  listLogoCreateMSReducer,
  listBackgroundCreateMSReducer,
  listNameCreateMSReducer,
  listQrCreateMSReducer,

  listNameCardCreateMSReducer,
  listCardEditReducer,
});

export default rootReducer;
