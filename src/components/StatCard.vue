<template>
  <a-col :xs="24" :sm="24" :md="11" :lg="5">
    <Paragraph className="orange-p-46" style="text-align: center; margin-bottom: 4px" >
      {{statItem.amount}}
    </Paragraph>
    <Paragraph className="gray100-p-14" style="text-align: center">
      {{statItem.title}}
    </Paragraph>
  </a-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Paragraph from "@/components/ui/Paragraph.vue";
import { IStatisticsItem } from '@/models/index'

export default defineComponent({
  props: {
    statItem: {
      type: Object as PropType<IStatisticsItem>,
      required: true
    }
  },
  components: {
    Paragraph
  },
})
</script>
