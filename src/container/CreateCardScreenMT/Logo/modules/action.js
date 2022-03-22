import { ADD_LOGO, REMOVE_LOGO } from "./constant";

export const TangLogoMT = (object) => {
  return {
    type: ADD_LOGO,
    object,
  };
};
export const HuyLogoMT = (object) => {
  return {
    type: REMOVE_LOGO,
    object,
  };
};
