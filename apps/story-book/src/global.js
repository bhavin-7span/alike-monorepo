import icons from "icons/icons.js";

export const register = (appInstance) => {
  for (var iconName in icons) {
    appInstance.component(`AwIcon${iconName}`, icons[iconName]);
  }
};
