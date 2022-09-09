<template>
  <span v-bind:class="className">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    className: {
      type: String,
      required: true,
    }
  }
});
</script>

<style scoped>
.white-span-12 {
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
}

.blue-span-16 {
  color: #1976D2;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}

.gray80-span-12 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
}

.gray80-span-16 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
}

.gray100-span-20 {
  color: #071F37;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
}

.gray80-span-bold-16 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
}

.gray80-span-20 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
}

.gray100-span-12 {
  color: #071F37;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
}

.orange-span-bold-12 {
  color: #F56900;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
}

.orange-span-16 {
  color: #F56900;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
}
</style>