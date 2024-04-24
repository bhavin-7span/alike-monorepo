import Section from "components/common/section.vue";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.component("Section", Section);
});
