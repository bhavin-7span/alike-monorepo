export default defineNuxtPlugin(async (nuxtApp) => {
  const { $i18n } = useNuxtApp();
  const env = useRuntimeConfig();

  // Fetch Languages for i18n
  const detail = await useSectionData(
    { collectionName: "languages", itemId: "" },
    {
      fields: ["code", "name", "dir"],
    }
  );
  let allLocales = [];
  if (detail && detail.length) {
    for (const lang of detail) {
      allLocales.push({
        code: lang?.code,
        name: lang?.name,
        dir: lang?.dir || "ltr",
        file: `${lang?.code}.js`,
      });
    }
  }
  $i18n.locales = allLocales;

  // Setup Previously Selected Locales
  const lang = useCookie("aw_locale", {
    domain: env?.public?.COOKIE_HOST,
  });
  $i18n.setLocale(lang.value || "en-US");
});
