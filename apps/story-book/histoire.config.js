import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  theme: {
    title: "Alike Story Book",
    favicon: "./public/favicon.png",
  },
  plugins: [HstVue()],
});
