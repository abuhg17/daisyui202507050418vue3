<template>
  <h1>Date Time Page 3</h1>
  <hr />
  2025/07/05 04:18:00
  <hr />
  {{ dtyear1 }}{{ dtyear2 }}/{{ dtmonth }}/{{ dtdate }}{{ " " }}{{ dthour }}:{{
    dtminute
  }}:{{ dtsecond }}
  <hr />
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
  dtmonth.value = String(dtmonth.value).padStart(2, "0");
  dtdate.value = dt.value.getDate();
  dtdate.value = String(dtdate.value).padStart(2, "0");
  dthour.value = dt.value.getHours();
  dthour.value = String(dthour.value).padStart(2, "0");
  dtminute.value = dt.value.getMinutes();
  dtminute.value = String(dtminute.value).padStart(2, "0");
  dtsecond.value = dt.value.getSeconds();
  dtsecond.value = String(dtsecond.value).padStart(2, "0");
}, 1000);
</script>
