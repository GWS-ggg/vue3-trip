<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <!-- <template v-for="(item,index) in groupData.hotCities" > -->
        <template v-for="(item, index) in groupData.hotCities">
          <div class="city" @click="clickCity(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="clickCity(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 动态索引
const indexList = computed(() => {
  let list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

// 城市点击
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
const clickCity = (city) => {
  currentCity.value = city;
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
}

.city {
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  color: #000;
  line-height: 28px;
  text-align: center;
  background-color: #fff4ec;
  margin: 6px 0;
}
</style>
