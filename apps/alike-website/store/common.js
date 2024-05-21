import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    data: [],
  }),
  getters: {
    getData(state) {
      return state.data;
    },
  },
  actions: {
    setData(data) {
      this.data = data;
    },
  },
});
