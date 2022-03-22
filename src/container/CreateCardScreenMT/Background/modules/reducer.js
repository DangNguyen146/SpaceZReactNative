const sateDefault = {
  backgroundMT: [],
};
const listBackgroundCreateMTReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_BACKGROUND": {
      //cập nhật lại state
      state.backgroundMT = action.object;
      return { ...state };
    }
    case "REMOVE_BACKGROUND": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listBackgroundCreateMTReducer;
