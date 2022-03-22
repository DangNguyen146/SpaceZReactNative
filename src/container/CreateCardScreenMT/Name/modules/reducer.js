const sateDefault = {
  nameMT: [],
};
const listNameCreateCardReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_NAME": {
      //cập nhật lại state
      state.nameMT = action.object;
      return { ...state };
    }
    case "REMOVE_NAME": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listNameCreateCardReducer;
