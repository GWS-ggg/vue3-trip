<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      shape="round"
      show-action
      placeholder="城市/区域/位置"
      @cancel="cancelClick"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const cancelClick = () => {
  router.back();
};
const searchValue = ref("");
</script>

<style lang="less" scoped></style>
