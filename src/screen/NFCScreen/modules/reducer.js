const sateDefault = {
  itemCard: [],
  listLike: [],
  listComment: [],
};
const listCardSocialReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_CARD_SOCIAL": {
      //cập nhật lại state
      state.itemCard = action.object;
      return { ...state };
    }
    case "ADD_CARD_LIKE_SOCIAL": {
      //cập nhật lại state
      state.listLike = action.object;
      return { ...state };
    }
    case "ADD_CARD_COMMENT_SOCIAL": {
      //cập nhật lại state
      state.listComment = action.object;
      return { ...state };
    }
    case "REMOVE_CARD_SOCIAL": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listCardSocialReducer;
