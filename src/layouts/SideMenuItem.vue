<template>
  <div class="side-menu-item">
      <router-link :to="menuItem.linkTo" style="color: #455a64">
        <img :src="menuItem.imageSrc" :alt="menuItem.altText" :style="{ margin: '0 24px 7px 24px' }"/>
        <p class="menu-item-text">{{ menuItem.title }}</p>
      </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMenuItem } from "@/layouts/types";

export default defineComponent({
  props: {
    menuItem: {
      type: Object as PropType<IMenuItem>,
      required: true,
    },
  },
});
</script>

<style scoped>
.side-menu-item {
  margin-bottom: 30px;
  cursor: pointer;
}

.menu-item-text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 140%;
  text-align: center;
  margin: auto;
}
</style>
