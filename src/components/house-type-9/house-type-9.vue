<template>
  <div class="house-type-9">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseInfo.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ houseInfo.summaryText }}</div>
        <div class="house-name">{{ houseInfo.houseName }}</div>
        <div class="score-price">
          <van-rate
            :model-value="itemScore"
            color="#fff"
            :size="15"
            readonly
            allow-half
          />
          <div class="price">{{ houseInfo.productPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const porps = defineProps({
  houseInfo: {
    type: Object,
    default: () => ({}),
  },
});

const itemScore = computed(() => {
  return Number(porps.houseInfo.commentScore);
});
</script>

<style lang="less" scoped>
.house-type-9 {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
  }

  .cover {
    img {
      width: 100%;
    }
  }

  .info {
    position: absolute;
    bottom: 0;
    padding: 8px 10px;
    color: #fff;
  }
  .summary {
    font-size: 12px;
  }

  .house-name {
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .score-price {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
