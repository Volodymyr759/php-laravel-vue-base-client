<template>
  <a-button v-bind:class="className" :type="type" shape="round" :size="size">
    <slot></slot>
  </a-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    className: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: 'small'
    },
    type: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
});
</script>

<style scoped>
.blue-white {
  color: white;
  background: #1976d2;
}

.black-white {
  color: white;
  background: #071F37;
}

.white-black {
  color: #071F37;
  background: white;
  border: 2px solid #071F37;
}

.white-black-auth {
  width: 161px;
  height: 60px !important;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(26, 39, 37, 0.05);
  border-radius: 100px !important;
}

.white-red {
  color: #DA2C38;
  background: white;
  border: 2px solid #DA2C38;
}

.white-blue {
  color: #1976D2;
  background: white;
  border: 2px solid #1976D2;
}
</style>