import AwSection from "components/common/section.vue";

// typography
import AwHeading2 from "components/common/aw-heading2.vue";
import SectionTitle from "components/common/section-title.vue";
import Text from "components/common/text.vue";
import RichText from "components/common/rich-text.vue";

import Button from "components/button.vue";
import FormInput from "components/input.vue";

import icons from "icons/icons.js";

export default defineNuxtPlugin((nuxtApp) => {
  // Registering global component
  nuxtApp.vueApp.component("AwSection", AwSection);

  // typography
  nuxtApp.vueApp.component("AwHeading2", AwHeading2);
  nuxtApp.vueApp.component("SectionTitle", SectionTitle);
  nuxtApp.vueApp.component("Text", Text);
  nuxtApp.vueApp.component("RichText", RichText);

  nuxtApp.vueApp.component("AwButton", Button);
  nuxtApp.vueApp.component("AwFormInput", FormInput);
  for (var iconName in icons) {
    nuxtApp.vueApp.component(`AwIcon${iconName}`, icons[iconName]);
  }
});
