import { ADD_LOGO_MS, REMOVE_LOGO_MS } from "./constant";

export const TangLogoMS = (object) => {
  return {
    type: ADD_LOGO_MS,
    object,
  };
};
export const HuyLogoMS = (object) => {
  return {
    type: REMOVE_LOGO_MS,
    object,
  };
};
