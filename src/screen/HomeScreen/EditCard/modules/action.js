import { ADD_CARD_EDIT, REMOVE_CARD_EDIT } from "./constant";

export const TanCardEdit = (object) => {
  return {
    type: ADD_CARD_EDIT,
    object,
  };
};
export const HuyCardEdit = (object) => {
  return {
    type: REMOVE_CARD_EDIT,
    object,
  };
};
