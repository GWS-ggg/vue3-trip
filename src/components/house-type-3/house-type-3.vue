<template>
  <div class="house-type-3">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseInfo.image.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ houseInfo.location }}</span>
        </div>
        <div class="house-name">{{ houseInfo.houseName }}</div>
        <div class="summary">{{ houseInfo.summaryText }}</div>
        <div class="price">
          <div class="new">¥ {{ houseInfo.finalPrice }}</div>
          <div class="old">¥ {{ houseInfo.productPrice }}</div>
          <div class="tip" v-if="houseInfo.priceTipBadge">
            {{ houseInfo.priceTipBadge.text }}
          </div>
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
</script>

<style lang="less" scoped>
.house-type-3 {
  width: 50%;

  .item-inner {
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      padding: 8px 10px;
      color: #666;
      font-size: 12px;
    }

    .location {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }
    }
    .house-name {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      align-items: flex-start;
      margin: 8px 0;

      .new {
        color: #ff9645;
        font-size: 14px;
      }

      .old {
        margin: 2px 3px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }

      .tip {
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
      }
    }
  }
}
</style>
