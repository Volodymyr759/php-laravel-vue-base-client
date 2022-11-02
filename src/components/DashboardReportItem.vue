<template>
  <div class="report-item">
    <div>
      <div>
        <Span className="gray100-span-12">{{report.created_at}}</Span>
      </div>
      <div>
        <img src="/images/check_ring_light.svg" alt="check ring" />&nbsp;
        <Span className="gray100-span-12">{{report.status}}</Span>
      </div>
    </div>
    <div>
      <a-button @click="showReview" type="primary" shape="round" size="small" style="margin-top: 10px; background: #1976d2; width: 73px">
        <Span className="white-span-12">Review</Span>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Span from "@/components/ui/Span.vue";
import { IDashboardReportItem } from "@/models/Dashboard";

export default defineComponent({
  props: {
    report: {
      type: Object as PropType<IDashboardReportItem>,
      required: true,
    },
  },
  components: {
    Span,
  },
  methods: {
    showReview() {
      alert("Show Review button is not implemented yet.");
    }
  }
})
</script>


<style scoped>
.report-item {
  display: flex; 
  justify-content: space-between;
  padding: 8px 16px;
  margin: 4px 0;
  background: linear-gradient(0deg, rgba(255, 180, 0, 0.1), rgba(255, 180, 0, 0.1)), #FFFFFF;
  border-radius: 10px;
}
</style>