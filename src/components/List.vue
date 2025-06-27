<template>
  <div v-if="infoList.length">
    <div
      v-for="(info, index) in infoList"
      :key="index"
      class="stats shadow m-4"
    >
      <div class="stat">
        <div class="stat-title">
          {{ info.title }}
          <br />{{ info.channel }}<br />{{ info.published }}
        </div>
        <div class="stat-value">Views: {{ formatNumber(info.views) }}</div>
        <div class="stat-desc">Likes: {{ formatNumber(info.likes) }}</div>
      </div>
    </div>
  </div>
  <div v-else>載入中...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const videoIds = [
  "LEFRPU0b0QQ",
  "0_vfdJ_M298",
  "hnl-44mXdKI",
  "04t_L8Okvbg",
  "XUa9d7E081A",
  "dQw4w9WgXcQ",
  "djcRSEmnvZ8",
  "VUrSsrAnq8M",
  "9eGkn0jhS8A",
  "yqI-InlItm4",
  "zy1sDJcwLw8",
  "Ro8QCl_TwAQ",
  "h7LtLEgcHYc",
  "KTPMijEPSTE",
  "VYItuW-QDY0",
  "ae-3VUfTa6M",
  "n2LX1RcFXkw",
  "QeRsz05jf24",
  "Tmmv0CfJ4v4",
  "89ANKCx94RQ",
  "PY15_MWqW0Q",
  "1YN3U_CIi70",
  "8jZztAkIYhQ",
  "kmMOqTiUhAY",
  "heK6ubmZ81k",
  "Cq8k__yuAak",
  "7F6dS5v9g9s",
  "jNQXAC9IVRw",
  "WS3sGVgkOZk",
  "sKrPgyQjv8Y",
  "nmq3I-8Izus",
  "TmbWEcs_4k0",
  "ihJy6p71nuA",
  "8oGdZZ9y3Uw",
];
const apiBase =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=";
const apiKey = "AIzaSyARxObGJgbWeVUC2Jhal6ic-XbdJUfI-h0";

const infoList = ref([]);

// 數字格式化函式（三位數逗號）
const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

onMounted(async () => {
  try {
    const requests = videoIds.map((id) =>
      axios.get(`${apiBase}${id}&key=${apiKey}`)
    );
    const responses = await Promise.all(requests);

    infoList.value = responses
      .map((res) => {
        const item = res.data.items[0];
        return item
          ? {
              title: item.snippet.title,
              channel: item.snippet.channelTitle,
              views: item.statistics.viewCount,
              likes: item.statistics.likeCount,
              published: item.snippet.publishedAt,
            }
          : null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error("YouTube API 請求失敗", error);
  }
});
</script>
