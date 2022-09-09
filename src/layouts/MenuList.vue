<template>
  <div class="flex-column flex-align-center">
    <SideMenuItem v-for="item in menuItems" :menuItem="item" :key="item.linkTo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMenuItem } from "@/layouts/types";
import SideMenuItem from '@/layouts/SideMenuItem.vue'

export default defineComponent({
  props: {
    menuItems: {
      type: Array as PropType<IMenuItem[]>,
      required: true,
    },
  },
  components: {
    SideMenuItem
  }
});
</script>

