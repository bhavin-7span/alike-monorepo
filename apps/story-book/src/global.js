import icons from "icons/icons.js";
import ControlGroup from "./components/control-group.vue";
import Icon from "components/icon.vue";
import validations from "plugins/vee-validate.js";

validations();

export const register = (appInstance) => {
  appInstance.component("ControlGroup", ControlGroup);
  appInstance.component("Icon", Icon);
  for (var iconName in icons) {
    appInstance.component(`AwIcon${iconName}`, icons[iconName]);
  }
};
