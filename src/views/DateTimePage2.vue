<template>
  <h1>Date Time Page 2</h1>
  <div class="flex justify-center items-center">
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 20" aria-live="polite" aria-label="20">20</span>
        </span>
        ye
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 25" aria-live="polite" aria-label="25">25</span>
        </span>
        ar
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 07" aria-live="polite" aria-label="07">07</span>
        </span>
        month
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 05" aria-live="polite" aria-label="05">05</span>
        </span>
        day
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 04" aria-live="polite" aria-label="04">04</span>
        </span>
        hour
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style="--value: 18" aria-live="polite" aria-label="18">18</span>
        </span>
        min
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center mt-5">
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value: ${dtyear1}`"
            aria-live="polite"
            aria-label="20"
            >20</span
          >
        </span>
        ye
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value: ${dtyear2}`"
            aria-live="polite"
            aria-label="25"
            >25</span
          >
        </span>
        ar
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value: ${dtmonth}`"
            aria-live="polite"
            aria-label="07"
            >07</span
          >
        </span>
        month
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value: ${dtdate}`" aria-live="polite" aria-label="05"
            >05</span
          >
        </span>
        day
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value: ${dthour}`" aria-live="polite" aria-label="04"
            >04</span
          >
        </span>
        hour
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value: ${dtminute}`"
            aria-live="polite"
            aria-label="18"
            >18</span
          >
        </span>
        min
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span
            :style="`--value: ${dtsecond}`"
            aria-live="polite"
            aria-label="00"
            >00</span
          >
        </span>
        sec
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const dt = ref(new Date());
const dtyear1 = ref(Math.floor(dt.value.getFullYear() / 100));
const dtyear2 = ref(dt.value.getFullYear() % 100);
const dtmonth = ref(dt.value.getMonth() + 1);
const dtdate = ref(dt.value.getDate());
const dthour = ref(dt.value.getHours());
const dtminute = ref(dt.value.getMinutes());
const dtsecond = ref(dt.value.getSeconds());
setInterval(() => {
  dt.value = new Date();
  dtyear1.value = Math.floor(dt.value.getFullYear() / 100);
  dtyear2.value = dt.value.getFullYear() % 100;
  dtmonth.value = dt.value.getMonth() + 1;
  dtdate.value = dt.value.getDate();
  dthour.value = dt.value.getHours();
  dtminute.value = dt.value.getMinutes();
  dtsecond.value = dt.value.getSeconds();
}, 1000);
</script>
