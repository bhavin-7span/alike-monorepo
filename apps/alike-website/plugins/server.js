// import { commonStore } from "@/store/index.js";
import { useLanguageStore } from "@/store/language.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async (renderContext) => {
    // Server Init Call
    if (process.server) {
      const languageStore = useLanguageStore();
      // const store = commonStore();
      //   const token = useCookie("aw_auth");
      //   const lang = useCookie("aw_locale", {
      //     domain: env?.public?.COOKIE_HOST,
      //   });
      const detail = await useSectionData(
        { collectionName: "languages", itemId: "" },
        {
          fields: ["*.*"],
        }
      );
      if (detail && detail.length) {
        languageStore.setAllLanguages(detail);
      }
    }
  });
});
