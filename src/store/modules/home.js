import { getHotSuggestsData, getCategoriesData } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggestsData();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getCategoriesData();
      this.categories = res.data;
    },
  },
});

export default useHomeStore;
