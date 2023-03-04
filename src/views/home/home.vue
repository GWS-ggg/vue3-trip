<template>
  <div class="home"></div>
  <homeNavBar></homeNavBar>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" />
  </div>
  <homeSearchBox></homeSearchBox>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .text {
    font-size: 12px;
    position: relative;
    top: 2px;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;
  }
  img {
    margin-left: 5px;
    width: 18px;
    height: 18px;
  }
}
</style>
