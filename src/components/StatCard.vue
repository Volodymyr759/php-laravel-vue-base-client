<template>
  <a-col :xs="24" :sm="24" :md="11" :lg="5" class="text-align-center">
    <Paragraph className="orange-p-46">
      {{statItem.amount}}
    </Paragraph>
    <Paragraph className="gray100-p-14" >
      {{statItem.title}}
    </Paragraph>
  </a-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Paragraph from "@/components/ui/Paragraph.vue";
import { IStatisticsItem } from "@/models/Dashboard";

export default defineComponent({
  props: {
    statItem: {
      type: Object as PropType<IStatisticsItem>,
      required: true,
    },
  },
  components: {
    Paragraph,
  },
});
</script>

