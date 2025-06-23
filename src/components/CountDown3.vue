<template>
  <h1>{{ title }}</h1>
  <div class="flex justify-center items-center">
    <div id="flipdown" class="flipdown"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = new Date("2025-07-05T04:18:00+08:00").getTime() / 1000;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });
});
</script>

<style scoped></style>
