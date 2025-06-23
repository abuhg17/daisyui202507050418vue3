<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <button class="btn btn-dash">Default</button>
  <button class="btn btn-dash btn-primary">Primary</button>
  <button class="btn btn-dash btn-secondary">Secondary</button>
  <button class="btn btn-dash btn-accent">Accent</button>
  <button class="btn btn-dash btn-info">Info</button>
  <button class="btn btn-dash btn-success">Success</button>
  <button class="btn btn-dash btn-warning">Warning</button>
  <button class="btn btn-dash btn-error">Error</button>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
