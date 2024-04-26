import Section from "components/common/section.vue";
import AwHeading2 from "components/common/aw-heading2.vue";
import icons from "icons/icons.js";
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.component("Section", Section);
  nuxtApp.vueApp.component("AwHeading2", AwHeading2);
  for (var iconName in icons) {
    nuxtApp.vueApp.component(`AwIcon${iconName}`, icons[iconName]);
  }
});
