<template>
  <h1>{{ title }}</h1>
  <div class="flex justify-center items-center">
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value:${days}`"
            aria-live="polite"
            :aria-label="days"
            >{{ days }}</span
          >
        </span>
        days
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value:${hours}`"
            aria-live="polite"
            :aria-label="hours"
            >{{ hours }}</span
          >
        </span>
        hours
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value:${minutes}`"
            aria-live="polite"
            :aria-label="minutes"
            >{{ minutes }}</span
          >
        </span>
        min
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value:${seconds}`"
            aria-live="polite"
            :aria-label="seconds"
            >{{ seconds }}</span
          >
        </span>
        sec
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
import { ref, onMounted, onBeforeUnmount } from "vue";

const targetDate = new Date("2025-07-05T04:18:00+08:00");

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let timer = null;

function update() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(timer);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
}

onMounted(() => {
  update();
  timer = setInterval(update, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
