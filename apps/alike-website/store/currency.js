import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    current: "USD",
    allCurrencies: [],
  }),
  getters: {
    getCurrentCurrency(state) {
      return state.current;
    },
    getAllCurrencies(state) {
      return state.allCurrencies;
    },
  },
  actions: {
    async setCurrentCurrency(abbreviation) {
      const selectedCurrency = this.allCurrencies.find(
        (data) => data?.abbreviation === abbreviation
      );
      if (selectedCurrency) {
        this.current = selectedCurrency;
      } else {
        this.current = "USD";
      }
    },
    setAllCurrencies(data) {
      this.allCurrencies = data;
    },
  },
});
