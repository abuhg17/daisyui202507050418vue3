<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">🎬 Bilibili 播放數查詢</h2>
    <table class="table-auto border w-full text-sm">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-2">BV號</th>
          <th class="border px-2">標題</th>
          <th class="border px-2">播放數</th>
          <th class="border px-2">按讚數</th>
          <th class="border px-2">彈幕數</th>
          <th class="border px-2">錯誤</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in videoList" :key="info.bvid">
          <td class="border px-2">{{ info.bvid }}</td>
          <td class="border px-2">{{ info.title || "-" }}</td>
          <td class="border px-2">{{ info.view?.toLocaleString() || "-" }}</td>
          <td class="border px-2">{{ info.like?.toLocaleString() || "-" }}</td>
          <td class="border px-2">
            {{ info.danmaku?.toLocaleString() || "-" }}
          </td>
          <td class="border px-2 text-red-500">{{ info.error || "" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const bvList = [
  "BV1BELHzyEMi",
  "BV1iZLJzuE6S",
  "BV1Et4y1r7Eu",
  "BV13s41167Ap",
  "BV1rSNvzeEPt",
  "BV1RkT2zREai",
  "BV1ogJhz1EbJ",
  "BV1JtNXzkEFN",
  "BV1rEMxzyE1M",
  "BV1DHNJzqERT",
  "",
];

const videoList = ref([]);

const fetchVideoStats = async (bvid) => {
  const url = `http://localhost:3000/api/bilibili/${bvid}`;
  try {
    const res = await axios.get(url);
    const data = res.data;
    if (data.code === 0) {
      const info = data.data;
      return {
        bvid,
        title: info.title,
        view: info.stat.view,
        like: info.stat.like,
        danmaku: info.stat.danmaku,
      };
    } else {
      return { bvid, error: data.message };
    }
  } catch (err) {
    return { bvid, error: err.message };
  }
};

onMounted(async () => {
  const results = await Promise.all(bvList.map(fetchVideoStats));
  videoList.value = results;
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th,
td {
  text-align: center;
}
</style>
