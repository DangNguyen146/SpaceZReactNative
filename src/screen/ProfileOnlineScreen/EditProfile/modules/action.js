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
  ADD_ID,
  REMOVE_GRAPHICSNEN,
} from "./constant";

export const AddIdEdit = (id) => {
  return {
    type: ADD_ID,
    id,
  };
};

export const AddContentEdit = (data) => {
  return {
    type: ADD_CONTENT,
    data,
  };
};
export const RemoveContentEdit = (data) => {
  return {
    type: REMOVE_CONTENT,
    data,
  };
};

export const AddProfileUpEdit = (data) => {
  return {
    type: ADD_PROFILE_UP,
    data,
  };
};
export const RemoveProfileUpEdit = (data) => {
  return {
    type: REMOVE_PROFILE_UP,
    data,
  };
};

export const AddProfileCenterEdit = (data) => {
  return {
    type: ADD_PROFILE_CENTER,
    data,
  };
};

export const RemoveProfileCenterEdit = (data) => {
  return {
    type: REMOVE_PROFILE_CENTER,
    data,
  };
};
export const RemoveItemProfileCenterEdit = (index = -1) => {
  return {
    type: REMOVE_ITEM_PROFILE_CENTER,
    index,
  };
};
export const EditIconProfileCenterEdit = (index, item) => {
  return {
    type: EDIT_ICON_PROFILE_CENTER,
    index,
    item,
  };
};

export const AddProfileDownEdit = (data) => {
  return {
    type: ADD_PROFILE_DOWN,
    data,
  };
};
export const RemoveProfileDownEdit = (data) => {
  return {
    type: REMOVE_PROFILE_DOWN,
    data,
  };
};
export const RemoveItemProfileDownEdit = (index = -1) => {
  return {
    type: REMOVE_ITEM_PROFILE_DOWN,
    index,
  };
};
export const EditIconProfileDownEdit = (index, item) => {
  return {
    type: EDIT_ICON_PROFILE_DOWN,
    index,
    item,
  };
};

export const AddGraphicsNenEdit = (data = 0) => {
  return {
    type: ADD_GRAPHICSNEN,
    data,
  };
};
export const AddGraphicsNenColorEdit = (name, data) => {
  return {
    type: ADD_GRAPHICSNEN_COLOR,
    name,
    data,
  };
};
export const RemoveGraphicsNenEdit = () => {
  return {
    type: REMOVE_GRAPHICSNEN,
  };
};
