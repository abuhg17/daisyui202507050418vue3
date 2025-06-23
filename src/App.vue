<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import CountDown1 from "./components/CountDown1.vue";
import CountDown2 from "./components/CountDown2.vue";
import CountDown3 from "./components/CountDown3.vue";
import List from "./components/List.vue";
import Timeline from "./components/Timeline.vue";
import Bilibili from "./components/Bilibili.vue";
import { ref } from "vue";
const isshowBilibili = ref(true);
</script>

<template>
  <CountDown1 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  <CountDown2 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  <CountDown3 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  <button @click="isshowBilibili = !isshowBilibili">Bilibili</button>
  <div v-show="isshowBilibili">
    <Bilibili />
  </div>
  <List />
  <Timeline />
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
