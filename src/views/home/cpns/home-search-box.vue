<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div
      class="section date-range bottom-gray-line"
      @click="calendarShow = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDay }}</span>
        </div>
        <div class="stay">共{{ diffDay }}晚</div>
        <div class="end">
          <div class="date">
            <span class="tip">离店</span>
            <span class="time">{{ endDay }}</span>
          </div>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="calendarShow"
      type="range"
      color="#ff9854"
      :round="false"
      @confirm="onConfirm"
    />

    <!-- 价格/人数选择 -->
    <div class="money-people section bottom-gray-line">
      <div class="money">价格不限</div>
      <div class="people">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <div class="hot-suggests section">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="suggest"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";
import useCityStore from "@/store/modules/city";

const router = useRouter();

// 位置信息
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
const cityClick = () => {
  router.push("/city");
};
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功", res);
    },
    (err) => {
      console.log("获取位置失败", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

// 日期选择
const startDate = new Date();
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1);

const startDay = ref(formatMonthDay(startDate));
const endDay = ref(formatMonthDay(endDate));
const diffDay = ref(1);
const calendarShow = ref(false);
const onConfirm = (date) => {
  startDay.value = formatMonthDay(date[0]);
  endDay.value = formatMonthDay(date[1]);
  diffDay.value = getDiffDays(date[0], date[1]);
  calendarShow.value = false;
};

// 热门数据获取
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
const { hotSuggests } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
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

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    flex-direction: column;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.money-people {
  display: flex;

  .money {
    display: flex;
    flex: 1;
  }

  .people {
    min-width: 40px;
  }
}

.hot-suggests {
  margin: 10px 0;

  .suggest {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 10px;
  }
}
</style>
