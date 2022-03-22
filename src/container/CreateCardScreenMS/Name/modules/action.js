import { ADD_NAME_MS, REMOVE_NAME_MS } from "./constant";

export const TangNameMS = (object) => {
  return {
    type: ADD_NAME_MS,
    object,
  };
};
export const HuyNameMS = (object) => {
  return {
    type: REMOVE_NAME_MS,
    object,
  };
};
