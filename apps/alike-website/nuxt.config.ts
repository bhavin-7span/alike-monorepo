// https://nuxt.com/docs/api/configuration/nuxt-config
import apollo from "./nuxt-config/apollo";
import env from "./env";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/apollo"
  ],
  runtimeConfig: {
    public: {
      ...env,
    },
  },
  apollo
})
