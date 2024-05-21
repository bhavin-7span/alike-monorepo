import { useCurrencyStore } from "@/store/currency";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { $i18n } = useNuxtApp();
  const currencyStore = useCurrencyStore();
  const env = useRuntimeConfig();

  // Fetch Languages for i18n
  const localesDetail = await useSectionData(
    { collectionName: "languages", itemId: "" },
    {
      fields: ["code", "name", "dir"],
    }
  );
  let allLocales = [];
  if (localesDetail && localesDetail.length) {
    for (const lang of localesDetail) {
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

  // Setup Currencies
  const currencyDetail = await useSectionData(
    { collectionName: "currencies", itemId: "" },
    {
      fields: ["abbreviation", "name", "symbol"],
    }
  );
  if (currencyDetail && currencyDetail.length) {
    currencyStore.setAllCurrencies(currencyDetail);
  }

  // Setup Previously Selected Locales
  const currentCurrency = useCookie("aw_currency", {
    domain: env?.public?.COOKIE_HOST,
  });
  currencyStore.setCurrentCurrency(currentCurrency.value || "USD");
});
