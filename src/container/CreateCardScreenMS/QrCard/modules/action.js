import { ADD_QR_MS, REMOVE_QR_MS } from "./constant";

export const TangQrMS = (object) => {
  return {
    type: ADD_QR_MS,
    object,
  };
};
export const HuyQrMS = (object) => {
  return {
    type: REMOVE_QR_MS,
    object,
  };
};
