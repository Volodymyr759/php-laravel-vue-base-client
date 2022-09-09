<template>
  <div class="seer-spin">
    <a-spin :indicator="indicator" />
  </div>
</template>

<script lang="ts">
import { LoadingOutlined } from '@ant-design/icons-vue';
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: '24px',
        color: '#1976D2'
      },
      spin: true,
    });
    return {
      indicator,
    };
  },
});
</script>

<style scoped>
.seer-spin {
  text-align: center;
  margin-top: 40px;
}
</style>