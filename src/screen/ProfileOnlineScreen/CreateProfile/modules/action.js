import {
  ADD_CONTENT,
  REMOVE_CONTENT,
  ADD_PROFILE_UP,
  REMOVE_PROFILE_UP,
  ADD_PROFILE_CENTER,
  REMOVE_PROFILE_CENTER,
  REMOVE_ITEM_PROFILE_CENTER,
  EDIT_ICON_PROFILE_CENTER,
  ADD_PROFILE_DOWN,
  REMOVE_PROFILE_DOWN,
  REMOVE_ITEM_PROFILE_DOWN,
  EDIT_ICON_PROFILE_DOWN,
  ADD_GRAPHICSNEN,
  ADD_GRAPHICSNEN_COLOR,
  REMOVE_GRAPHICSNEN,
} from "./constant";

export const AddContent = (data) => {
  return {
    type: ADD_CONTENT,
    data,
  };
};
export const RemoveContent = () => {
  return {
    type: REMOVE_CONTENT,
  };
};

export const AddProfileUp = (data) => {
  return {
    type: ADD_PROFILE_UP,
    data,
  };
};
export const RemoveProfileUp = () => {
  return {
    type: REMOVE_PROFILE_UP,
  };
};

export const AddProfileCenter = (data) => {
  return {
    type: ADD_PROFILE_CENTER,
    data,
  };
};

export const RemoveProfileCenter = () => {
  return {
    type: REMOVE_PROFILE_CENTER,
  };
};
export const RemoveItemProfileCenter = (index = -1) => {
  return {
    type: REMOVE_ITEM_PROFILE_CENTER,
    index,
  };
};
export const EditIconProfileCenter = (index, item) => {
  return {
    type: EDIT_ICON_PROFILE_CENTER,
    index,
    item,
  };
};

export const AddProfileDown = (data) => {
  return {
    type: ADD_PROFILE_DOWN,
    data,
  };
};
export const RemoveProfileDown = () => {
  return {
    type: REMOVE_PROFILE_DOWN,
  };
};
export const RemoveItemProfileDown = (index = -1) => {
  return {
    type: REMOVE_ITEM_PROFILE_DOWN,
    index,
  };
};
export const EditIconProfileDown = (index, item) => {
  return {
    type: EDIT_ICON_PROFILE_DOWN,
    index,
    item,
  };
};

export const AddGraphicsNen = (data = 0) => {
  return {
    type: ADD_GRAPHICSNEN,
    data,
  };
};
export const AddGraphicsNenColor = (name, data) => {
  return {
    type: ADD_GRAPHICSNEN_COLOR,
    name,
    data,
  };
};

export const RemoveGraphicsNen = () => {
  return {
    type: REMOVE_GRAPHICSNEN,
  };
};
