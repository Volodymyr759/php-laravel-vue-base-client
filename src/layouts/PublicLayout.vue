<template>
  <div class="public-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.public-layout {
  background: no-repeat #1976d2 bottom/100% url(~@/../public/images/city.svg);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>

