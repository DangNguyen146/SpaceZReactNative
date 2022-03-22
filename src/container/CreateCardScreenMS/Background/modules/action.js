import { ADD_BACKGROUND_MS, REMOVE_BACKGROUND_MS } from "./constant";

export const TangBackgroundMS = (object) => {
  return {
    type: ADD_BACKGROUND_MS,
    object,
  };
};
export const HuyBackgroundMS = (object) => {
  return {
    type: REMOVE_BACKGROUND_MS,
    object,
  };
};
