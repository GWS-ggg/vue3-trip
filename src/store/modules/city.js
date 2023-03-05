import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityId: 139,
      cityName: "徐州",
      pinYin: "xuzhou",
      gangAoTai: false,
      hot: false,
      longitude: "117.189",
      latitude: "34.2696",
    },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});

export default useCityStore;
