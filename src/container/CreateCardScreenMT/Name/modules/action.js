import { ADD_NAME, REMOVE_NAME } from "./constant";

export const TangNameMT = (object) => {
  return {
    type: ADD_NAME,
    object,
  };
};
export const HuyNameMT = (object) => {
  return {
    type: REMOVE_NAME,
    object,
  };
};
