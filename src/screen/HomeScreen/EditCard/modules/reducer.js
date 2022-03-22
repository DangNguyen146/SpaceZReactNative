const sateDefault = {
  itemCard: [],
};
const listCardEditReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_CARD_EDIT": {
      //cập nhật lại state
      state.itemCard = action.object;
      return { ...state };
    }
    case "REMOVE_CARD_EDIT": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listCardEditReducer;
