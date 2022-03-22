import { ADD_NAME_CARD, REMOVE_NAME_CARD } from "./constant";

export const TangNameCard = (object) => {
  return {
    type: ADD_NAME_CARD,
    object,
  };
};
export const HuyNameCard = (object) => {
  return {
    type: REMOVE_NAME_CARD,
    object,
  };
};
