<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="城市/区域/位置"
        @cancel="cancelClick"
      />

      <van-tabs v-model:active="tabActive" color="#ff9854" line-width="30px">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(item, index) in currentGroup">
        <div>{{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useCityStore from "@/store/modules/city";

const router = useRouter();

// 搜索框
const cancelClick = () => {
  router.back();
};
const searchValue = ref("");

// tab pinia
const tabActive = ref();
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[tabActive.value]);
// tab 直接获取数据
// getCityAll().then((res) => {
//   console.log(res);
//   allCities.value = res.data;
// });
</script>

<style lang="less" scoped>
.city {
  // top固定定位
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }

  // .content {
  //   margin-top: 98px;
  // }

  //布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
