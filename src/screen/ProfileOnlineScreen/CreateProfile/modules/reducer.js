import { GRAPHICS_NEN } from "../../data/base/BaseGraphics";
import { ICONS_DATA } from "../../data/base/BaseIcons";
import { LOGOS_DATA } from "../../data/base/BaseLogo";

const sateDefault = {
  dataProfile: {},
  dataProfleUp: {},
  dataProfleCenter: ICONS_DATA,
  dataProfileDown: LOGOS_DATA,
  graphicsNen: GRAPHICS_NEN,
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
      state.dataProfleCenter = ICONS_DATA;
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
      state.dataProfileDown = LOGOS_DATA;
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
    case "ADD_GRAPHICSNEN": {
      let graphicsNenUpdate = [...state.graphicsNen];
      if (action.data.borderWidth !== -1) {
        graphicsNenUpdate[0].borderWidth = action.data.borderWidth;
      }
      if (action.data.borderRadius !== -1)
        graphicsNenUpdate[0].borderRadius = action.data.borderRadius;
      if (action.data.borderStyle !== -1)
        graphicsNenUpdate[0].borderStyle = action.data.borderStyle;

      state.graphicsNen = graphicsNenUpdate;
      return { ...state };
    }
    case "ADD_GRAPHICSNEN_COLOR": {
      let graphicsNenUpdate = [...state.graphicsNen];
      if (action.name == "NenKhung")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].backgroundColor = action.data.backgroundColor;
        }
      if (action.name == "VienKhung")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].borderColor = action.data.backgroundColor;
        }
      if (action.name == "Nen")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].backgroundNen = action.data.backgroundColor;
        }
      if (action.name == "title")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].colorTitle = action.data.backgroundColor;
        }
      if (action.name == "description")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].colorDiscription = action.data.backgroundColor;
        }
      if (action.name == "iconSocial")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].colorIcons = action.data.backgroundColor;
        }
      if (action.name == "infoBorder")
        if (action.data.backgroundColor !== -1) {
          graphicsNenUpdate[0].infoBorder = action.data.backgroundColor;
        }
      state.graphicsNen = graphicsNenUpdate;
      return { ...state };
    }
    case "REMOVE_GRAPHICSNEN": {
      state.graphicsNen = GRAPHICS_NEN;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default contentReducer;
