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
    setCurrentLanguage(data) {
      this.current = data;
    },
    setAllLanguages(data) {
      this.allLanguages = data;
    },
  },
});
