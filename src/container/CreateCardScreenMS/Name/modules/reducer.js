const sateDefault = {
  nameMS: [],
};
const listNameCreateCardReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_NAME_MS": {
      //cập nhật lại state
      state.nameMS = action.object;
      return { ...state };
    }
    case "REMOVE_NAME_MS": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listNameCreateCardReducer;
