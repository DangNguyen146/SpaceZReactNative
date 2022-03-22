import { ADD_QR, REMOVE_QR } from "./constant";

export const TangQrMT = (object) => {
  return {
    type: ADD_QR,
    object,
  };
};
export const HuyQrMT = (object) => {
  return {
    type: REMOVE_QR,
    object,
  };
};
