import apollo from "./nuxt-config/apollo";
import env from "./env";

const directusUrl = "https://craft.alike.host";
const directusAssetsUrl = "https://craft.alike.host/assets/";

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/css/style.css"],
  plugins: [{ src: "~/plugins/components.js" }, { src: "~/plugins/server.js" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-directus",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      directusUrl: directusUrl,
      directusAssetsUrl: directusAssetsUrl,
      ...env,
    },
  },
  image: {
    bunny: {
      baseURL: "https://alike-asset.b-cdn.net/vue-images",
    },
    directus: {
      baseURL: directusAssetsUrl,
    },
  },
  directus: {
    url: directusUrl,
  },
  apollo,
});
