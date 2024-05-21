// utils/i18nLoader.js
export async function loadLocaleMessages(locale) {
  try {
    return await import(`~/locales/${locale}.js`);
  } catch (e) {
    console.error(`Could not load locale ${locale}:`, e);
    return await import(`~/locales/en-US.js`); // Fallback to English
  }
}
