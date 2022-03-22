import { ADD_BACKGROUND, REMOVE_BACKGROUND } from "./constant";

export const TangBackgroundMT = (object) => {
  return {
    type: ADD_BACKGROUND,
    object,
  };
};
export const HuyBackgroundMT = (object) => {
  return {
    type: REMOVE_BACKGROUND,
    object,
  };
};
