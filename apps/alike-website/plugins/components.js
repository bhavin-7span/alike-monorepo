import Section from "components/common/section.vue";
import AWHeading2 from "components/common/aw-heading2.vue";
import icons from "icons/icons.js";
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.component("Section", Section);
  nuxtApp.vueApp.component("AWHeading2", AWHeading2);
  for (var iconName in icons) {
    console.log("Icon: " + iconName);
    nuxtApp.vueApp.component(`Icon${iconName}`, icons[iconName]);
  }
});
