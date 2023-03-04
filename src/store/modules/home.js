import { getHotSuggestsData } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggestsData();
      console.log(res);
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
