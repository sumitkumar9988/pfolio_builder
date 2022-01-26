import * as alias from "./../constant";

export const settingDrawerReducers = (state = { open: false }, action) => {
  switch (action.type) {
    case alias.SETTING_RIGHT_DRAWER_CLOSE:
      return { open: false };
    case alias.SETTING_RIGHT_DRAWER_UPEN:
      return { open: true };
    default:
      return state;
  }
};

export const imageDrawerReducers = (state = { imageDrawer: false }, action) => {
  switch (action.type) {
    case alias.IMAGE_SECOND_DRAWER_CLOSE:
      return { imageDrawer: false };
    case alias.IMAGE_SECOND_DRAWER_OPEN:
      return { imageDrawer: true };
    default:
      return state;
  }
};
