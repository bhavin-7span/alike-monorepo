import icons from "icons/icons.js";
import ControlGroup from "./components/control-group.vue";
export const register = (appInstance) => {
  appInstance.component("ControlGroup", ControlGroup);
  for (var iconName in icons) {
    appInstance.component(`AwIcon${iconName}`, icons[iconName]);
  }
};
