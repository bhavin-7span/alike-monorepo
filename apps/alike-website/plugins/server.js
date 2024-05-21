import { useLanguageStore } from "@/store/language.js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const env = useRuntimeConfig();
  const languageStore = useLanguageStore();
  const detail = await useSectionData(
    { collectionName: "languages", itemId: "" },
    {
      fields: ["id", "code", "name"],
    }
  );
  if (detail && detail.length) {
    languageStore.setAllLanguages(detail);
  }

  const lang = useCookie("aw_locale", {
    domain: env?.public?.COOKIE_HOST,
  });
  if (lang.value) {
    languageStore.setCurrentLanguage(lang.value);
  }
});
