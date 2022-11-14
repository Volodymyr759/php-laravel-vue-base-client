<template>
  <public-layout v-if="layout">
    <router-view />
  </public-layout>
  <main-layout v-else :title="title">
    <router-view />
  </main-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default defineComponent({
  computed: {
    layout() {
      return this.$route.meta.layout === "public-layout";
    },
    title() {
      return typeof this.$route.meta.title === 'string' ? this.$route.meta.title : 'Admin';
    },
  },
  components: {
    PublicLayout,
    MainLayout,
  },
});
</script>


<style lang="css">
@import "assets/index.css";
</style>
