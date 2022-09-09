<template>
  <p v-bind:class="className">
    <slot></slot>
  </p>
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
.blue-p-16 {
  color: #1976D2;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}
.white-p-12 {
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
}
.white-p-16 {
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}
.white-p-bold-16 {
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
}
.white-p-20 {
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
}
.white-p-26 {
  color: white;
  font-weight: 600;
  font-size: 26px;
  line-height: 140%;
}
.orange-p-46 {
  color: #F56900;
  font-weight: 700;
  font-size: 42px;
  line-height: 53px;
}
.gray100-p-14 {
  color: #071F37;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.gray80-p-16 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}
.gray80-p-18 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
}
.gray80-p-bold-18 {
  color: rgba(7, 31, 55, 0.8);
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
}
</style>