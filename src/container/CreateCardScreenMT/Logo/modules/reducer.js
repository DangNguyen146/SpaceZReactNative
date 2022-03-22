const sateDefault = {
  logoMT: [],
};
const listLogoCreateMTReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_LOGO": {
      //cập nhật lại state
      state.logoMT = action.object;
      return { ...state };
    }
    case "REMOVE_LOGO": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listLogoCreateMTReducer;
