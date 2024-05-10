import Section from "components/common/section.vue";
import AwHeading2 from "components/common/aw-heading2.vue";

import Button from "components/button.vue";
import FormInput from "components/form-input.vue";

import icons from "icons/icons.js";

export default defineNuxtPlugin((nuxtApp) => {
  // Registering global component
  nuxtApp.vueApp.component("Section", Section);
  nuxtApp.vueApp.component("AwHeading2", AwHeading2);
  nuxtApp.vueApp.component("AwButton", Button);
  nuxtApp.vueApp.component("AwFormInput", FormInput);
  for (var iconName in icons) {
    nuxtApp.vueApp.component(`AwIcon${iconName}`, icons[iconName]);
  }
});
