import { GRAPHICS } from "../../data/base/BaseGraphics";
import { ICONS_DATA } from "../../data/base/BaseIcons";
import { LOGOS_DATA } from "../../data/base/BaseLogo";

const sateDefault = {
  dataProfile: {},
  dataProfleUp: {},
  dataProfleCenter: ICONS_DATA,
  dataProfileDown: LOGOS_DATA,
  graphics: GRAPHICS,
};
const contentReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_CONTENT": {
      state.dataProfile = action.data;
      return { ...state };
    }
    case "REMOVE_CONTENT": {
      state.dataProfile = null;
      return { ...state };
    }
    case "ADD_PROFILE_UP": {
      state.dataProfleUp = action.data;
      return { ...state };
    }
    case "REMOVE_PROFILE_UP": {
      state.dataProfleUp = null;
      return { ...state };
    }
    case "ADD_PROFILE_CENTER": {
      state.dataProfleCenter = action.data;
      return { ...state };
    }
    case "REMOVE_PROFILE_CENTER": {
      state.dataProfleCenter = null;
      return { ...state };
    }
    case "REMOVE_ITEM_PROFILE_CENTER": {
      let dataProfleCenterUpdate = [...state.dataProfleCenter];

      if (action.index > -1) {
        dataProfleCenterUpdate.splice(action.index, 1);
      } else {
        dataProfleCenterUpdate.push({
          name: "AntDesign",
          icon: "message1",
          size: 40,
          color: "black",
          type: "link",
          title: "",
        });
      }
      state.dataProfleCenter = dataProfleCenterUpdate;
      return { ...state };
    }
    case "EDIT_ICON_PROFILE_CENTER": {
      let dataProfleCenterUpdate = [...state.dataProfleCenter];
      dataProfleCenterUpdate[action.index] = action.item;
      state.dataProfleCenter = dataProfleCenterUpdate;
      return { ...state };
    }
    case "ADD_PROFILE_DOWN": {
      state.dataProfileDown = action.data;
      return { ...state };
    }
    case "REMOVE_PROFILE_DOWN": {
      state.dataProfileDown = null;
      return { ...state };
    }
    case "REMOVE_ITEM_PROFILE_DOWN": {
      let dataProfileDownUpdate = [...state.dataProfileDown];

      if (action.index > -1) {
        dataProfileDownUpdate.splice(action.index, 1);
      } else {
        dataProfileDownUpdate.push({
          name: "AntDesign",
          icon: "message1",
          size: 40,
          color: "black",
          type: "link",
          title: "",
        });
      }
      state.dataProfileDown = dataProfileDownUpdate;
      return { ...state };
    }
    case "EDIT_ICON_PROFILE_DOWN": {
      let dataProfileDownUpdate = [...state.dataProfileDown];
      dataProfileDownUpdate[action.index] = action.item;
      state.dataProfileDown = dataProfileDownUpdate;
      return { ...state };
    }
    case "ADD_GRAPHICS": {
      let graphicsUpdate = [...state.graphics];

      // if (action.data.borderWidth)
      //   graphicsUpdate.borderWidth = action.data.borderWidth;
      // if (action.data.borderRadius)
      //   graphicsUpdate.borderRadius = action.data.borderRadius;
      // if (action.data.borderStyle)
      //   graphicsUpdate.borderStyle = action.data.borderStyle;
      // if (action.data.borderColor)
      //   graphicsUpdate.borderColor = action.data.borderColor;

      state.graphics = graphicsUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default contentReducer;
