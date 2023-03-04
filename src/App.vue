<template>
  <div class="app">
    <RouterView />
    <tabBar v-if="!router.meta.hideTabBar"></tabBar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import tabBar from "./components/tab-bar/tab-bar.vue";

const router = useRoute();
</script>

<style lang="less" scoped></style>
