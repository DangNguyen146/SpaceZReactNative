import {
  ADD_CARD_COMMENT_SOCIAL,
  ADD_CARD_LIKE_SOCIAL,
  ADD_CARD_SOCIAL,
  REMOVE_CARD_SOCIAL,
} from "./constant";

export const AddCardSocial = (object) => {
  return {
    type: ADD_CARD_SOCIAL,
    object,
  };
};
export const AddLikeSocial = (object) => {
  return {
    type: ADD_CARD_LIKE_SOCIAL,
    object,
  };
};
export const AddCommentSocial = (object) => {
  return {
    type: ADD_CARD_COMMENT_SOCIAL,
    object,
  };
};
export const HuyCardSocial = (object) => {
  return {
    type: REMOVE_CARD_SOCIAL,
    object,
  };
};
