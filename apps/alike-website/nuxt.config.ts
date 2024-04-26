// https://nuxt.com/docs/api/configuration/nuxt-config
import apollo from "./nuxt-config/apollo";
import env from "./env";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/style.css"],
  plugins: [{ src: "~/plugins/components.js" },{ src: "~/plugins/click-outside.js" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/apollo", "@nuxt/image"],
  image: {
    bunny: {
      baseURL: "https://alike-asset.b-cdn.net/vue-images",
    },
  },
  runtimeConfig: {
    public: {
      ...env,
    },
  },
  apollo,
});
