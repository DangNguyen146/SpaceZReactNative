const sateDefault = {
  qrMS: [],
};
const listQrCreateMSReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_QR_MS": {
      //cập nhật lại state
      state.qrMS = action.object;
      return { ...state };
    }
    case "REMOVE_QR_MS": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listQrCreateMSReducer;
