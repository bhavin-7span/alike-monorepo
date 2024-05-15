// import { commonStore } from "@/store/index.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async (renderContext) => {
    // Server Init Call
    if (process.server) {
      // const store = commonStore();
      //   const token = useCookie("aw_auth");
      //   const lang = useCookie("aw_locale", {
      //     domain: env?.public?.COOKIE_HOST,
      //   });
    }
  });
});
