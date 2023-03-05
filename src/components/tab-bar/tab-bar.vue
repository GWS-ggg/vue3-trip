<template>
  <div class="tab-bar">
    <!-- <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="" />
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="" />
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="" />
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="" />
      <span class="text">消息</span>
    </div> -->

    <!-- <template v-for="(item, index) in tabbarData">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itmeClick(index, item)"
      >
        <img :src="getAssetURL(item.image)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->

    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img
              v-if="currentIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { getAssetURL } from "@/utils/load_assets.js";
import { ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

const currentIndex = ref(0);
const itmeClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};

const route = useRoute();
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => {
    return item.path === newRoute.path;
  });
  if (index === -1) return;
  currentIndex.value = index;
});

const tabbarData = [
  {
    text: "首页",
    image: "tabbar/tab_home.png",
    imageActive: "tabbar/tab_home_active.png",
    path: "/home",
  },
  {
    text: "收藏",
    image: "tabbar/tab_favor.png",
    imageActive: "tabbar/tab_favor_active.png",
    path: "/favor",
  },
  {
    text: "订单",
    image: "tabbar/tab_order.png",
    imageActive: "tabbar/tab_order_active.png",
    path: "/order",
  },
  {
    text: "消息",
    image: "tabbar/tab_message.png",
    imageActive: "tabbar/tab_message.png",
    path: "/message",
  },
];
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3ff;
}
.tab-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &.active {
    color: var(--primary-color);
  }
}

.text {
  font-size: 14px;
  margin-top: 2px;
}

img {
  width: 26px;
}

:deep(.van-tabbar-item__icon img) {
  font-size: 32px;
}
</style>
