<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <houseType9
          :house-info="item.data"
          v-if="item.discoveryContentType === 9"
        ></houseType9>
        <houseType3
          :house-info="item.data"
          v-if="item.discoveryContentType === 3"
        ></houseType3>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";
import houseType9 from "@/components/house-type-9/house-type-9.vue";
import houseType3 from "@/components/house-type-3/house-type-3.vue";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
