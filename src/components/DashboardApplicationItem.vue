<template>
  <div class="application-item">
    <div>
      <div>
        <Span className="gray100-span-12">{{ application.created_at }}</Span>
      </div>
      <div>
        <img src="/images/check_ring_light.svg" alt="check ring" />&nbsp;
        <Span className="gray100-span-12">{{ application.address }}</Span>
      </div>
    </div>
    <div>
      <a-button type="link">
        <img src="/images/blue_ellipse.svg" alt="blue ellipse" /> 
        <Span className="gray100-span-12">&nbsp;{{ application.status}}</Span>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Span from "@/components/ui/Span.vue";
import { IDashboarApplicationItem } from "@/models/index";

export default defineComponent({
  props: {
    application: {
      type: Object as PropType<IDashboarApplicationItem>,
      required: true,
    },
  },
  components: {
    Span,
  },
});
</script>


<style scoped>
.application-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 4px 0;
  border-radius: 10px;
}
</style>