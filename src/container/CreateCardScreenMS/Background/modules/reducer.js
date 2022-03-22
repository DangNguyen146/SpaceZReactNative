const sateDefault = {
  backgroundMS: [],
};
const listBackgroundCreateMSReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_BACKGROUND_MS": {
      //cập nhật lại state
      state.backgroundMS = action.object;
      return { ...state };
    }
    case "REMOVE_BACKGROUND_MS": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listBackgroundCreateMSReducer;
