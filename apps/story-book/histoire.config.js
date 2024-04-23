import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  setupFile: "./histoire-setup.js",

  theme: {
    title: "Alike Story Book",
    favicon: "./public/favicon.png",
  },

  plugins: [HstVue()],
});
