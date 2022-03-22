const sateDefault = {
  itemNameCard: [],
};
const listNameCardCreateMSReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_NAME_CARD": {
      //cập nhật lại state
      state.itemNameCard = action.object;
      return { ...state };
    }
    case "REMOVE_NAME_CARD": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listNameCardCreateMSReducer;
