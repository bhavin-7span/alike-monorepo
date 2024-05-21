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
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        name: "English",
        dir: "ltr",
        file: "en-US.js",
      },
      {
        code: "ar-AR",
        name: "Arabic",
        dir: "rtl",
        file: "ar-AR.js",
      },
      {
        code: "zh-CN",
        name: "Mandarin",
        dir: "ltr",
        file: "zh-CN.js",
      },
      {
        code: "ja-JP",
        name: "Japanese",
        dir: "rtl",
        file: "ja-JP.js",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: env.COOKIE_HOST || "",
      cookieKey: "aw_locale",
      redirectOn: "root",
    },
  },
  apollo,
});
