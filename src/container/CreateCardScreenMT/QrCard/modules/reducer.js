const sateDefault = {
  qrMT: [],
};
const listQrCreateMTReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_QR": {
      //cập nhật lại state
      state.qrMT = action.object;
      return { ...state };
    }
    case "REMOVE_QR": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listQrCreateMTReducer;
