const sateDefault = {
  logoMS: [],
};
const listLogoCreateMSReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_LOGO_MS": {
      //cập nhật lại state
      state.logoMS = action.object;
      return { ...state };
    }
    case "REMOVE_LOGO_MS": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listLogoCreateMSReducer;
