import {
  getHotSuggestsData,
  getCategoriesData,
  getHouseListData,
} from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
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
    async fetchHouseListDate() {
      const res = await getHouseListData(this.currentPage++);
      this.houseList.push(...res.data);
    },
  },
});

export default useHomeStore;
