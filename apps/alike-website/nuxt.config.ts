import apollo from "./nuxt-config/apollo";
import env from "./env";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/style.css"],

  plugins: [
    { src: "~/plugins/components.js" },
    { src: "~/plugins/click-outside.js" },
    { src: "~/plugins/server.js" },
  ],
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
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        dir: "ltr",
        file: "en.js",
      },
      {
        code: "ar",
        name: "Arabic",
        dir: "rtl",
        file: "ar.js",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: env.COOKIE_HOST || "",
      cookieKey: "aw_locale",
      redirectOn: "root", // recommended
    },
  },
  apollo,
});
