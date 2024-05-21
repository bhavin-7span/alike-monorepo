import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    current: "en-US",
    allLanguages: [],
  }),
  getters: {
    getCurrentLanguage(state) {
      return state.current;
    },
    getAllLanguage(state) {
      return state.allLanguages;
    },
  },
  actions: {
    async setCurrentLanguage(code) {
      const selectedLanguage = this.allLanguages.find(
        (lang) => lang.code === code
      );
      if (selectedLanguage) {
        this.current = selectedLanguage;
        await this.addLanguage(selectedLanguage);
      } else {
        this.current = "en-US";
      }
    },
    setAllLanguages(data) {
      this.allLanguages = data;
    },
    async addLanguage(language) {
      // console.log("Language Got : ", language);
      // const { locales } = useI18n();
      // console.log("$i18n : ", locales);
      // if (!this.$i18n.locales.find((l) => l?.code === language?.code)) {
      // this.$i18n.locales.push({
      //   code: language?.code,
      //   name: language?.name,
      //   dir: language?.dir || "ltr", // Assuming 'ltr' if not provided
      //   file: `${language?.code}.js`,
      // });

      // if (!this.$i18n.getLocaleMessage(language.code)) {
      //   const messages = (await loadLocaleMessages(language.code)).default;
      //   this.$i18n.setLocaleMessage(language.code, messages);
      // }
      // }
    },
  },
});
