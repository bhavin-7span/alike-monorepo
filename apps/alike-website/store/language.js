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
    setCurrentLanguage(code) {
      const selectedLanguage = this.allLanguages.find(
        (lang) => lang.code === code
      );
      if (selectedLanguage) {
        this.current = selectedLanguage;
      } else {
        // If Setter Language not found
        this.current = "en-US";
      }
    },
    setAllLanguages(data) {
      this.allLanguages = data;
    },
  },
});
