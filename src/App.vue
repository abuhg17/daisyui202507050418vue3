<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import CountDown2 from "./components/CountDown2.vue";
import CountDown3 from "./components/CountDown3.vue";
import List from "./components/List.vue";
import Timeline from "./components/Timeline.vue";
import Bilibili from "./components/Bilibili.vue";
import { ref } from "vue";
const isshowCountDown2 = ref(false);
const isshowCountDown3 = ref(false);
const isshowTimeline = ref(false);
const isshowBilibili = ref(false);
const isshowList = ref(false);
const isshowHelloWorld = ref(false);
</script>

<template>
  <nav>
    <ul>
      <li>
        <routerLink to="/coutdown1">CountDown1</routerLink>
      </li>
      <li>
        <routerLink to="/about">About</routerLink>
      </li>
      <li>
        <routerLink to="/firebasefood">FirebaseFood</routerLink>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
  <button
    class="btn btn-dash btn-primary"
    @click="isshowCountDown2 = !isshowCountDown2"
  >
    CountDown2
  </button>
  <div v-show="isshowCountDown2">
    <CountDown2 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  </div>
  <button
    class="btn btn-dash btn-secondary"
    @click="isshowCountDown3 = !isshowCountDown3"
  >
    CountDown3
  </button>
  <div v-show="isshowCountDown3">
    <CountDown3 title="🎯 倒數目標時間：2025-07-05 04:18（台灣時間）" />
  </div>
  <button
    class="btn btn-dash btn-accent"
    @click="isshowTimeline = !isshowTimeline"
  >
    Timeline
  </button>
  <div v-show="isshowTimeline">
    <Timeline />
  </div>
  <button class="btn btn-dash btn-info" @click="isshowList = !isshowList">
    List
  </button>
  <div v-show="isshowList">
    <List />
  </div>
  <button
    class="btn btn-dash btn-success"
    @click="isshowBilibili = !isshowBilibili"
  >
    Bilibili
  </button>
  <div v-show="isshowBilibili">
    <Bilibili />
  </div>
  <button
    class="btn btn-dash btn-warning"
    @click="isshowHelloWorld = !isshowHelloWorld"
  >
    HelloWorld
  </button>
  <div v-show="isshowHelloWorld">
    <HelloWorld msg="Vite + Vue" />
  </div>
  <button class="btn btn-dash btn-error">Error</button>
</template>

<style scoped></style>
