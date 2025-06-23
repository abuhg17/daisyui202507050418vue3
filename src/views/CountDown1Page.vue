<template>
  <h1>CountDown1 Page</h1>
  <button class="btn btn-dash" @click="isshowCountDown1 = !isshowCountDown1">
    CountDown1
  </button>
  <div v-show="isshowCountDown1">
    <CountDown1 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  </div>
</template>
<script setup>
import CountDown1 from "../components/CountDown1.vue";
import { ref } from "vue";
const isshowCountDown1 = ref(false);
</script>
