<template>
  <div class="home"></div>
  <homeNavBar></homeNavBar>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" />
  </div>
  <homeSearchBox></homeSearchBox>
  <homeCategories></homeCategories>
  <div class="search-bar" v-if="isShowSearchBar">
    <searchBar></searchBar>
  </div>

  <homeContent></homeContent>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import useHomeStore from "@/store/modules/home";
import homeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll.js";
import searchBar from "@/components/search-bar/search-bar.vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListDate();

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListDate().then(() => {
      isReachBottom.value = false;
    });
  }
});

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
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
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
