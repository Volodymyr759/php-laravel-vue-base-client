<template>
  <a-col class="property-card-wrapper" :xs="24" :sm="11" :md="11" :lg="7">
    <div>
      <img v-bind:src="property.imgSrc" alt="property photo" style="width: 100%" />
      <br />
      <img src="/images/home_dashboard.svg" alt="home icon" />
      <Span className="gray80-span-16">
        {{property.address}}
      </Span>
      <br />
      <img src="/images/geo_pin.svg" alt="geo icon" />
      <Span className="gray80-span-12">{{property.name}}</Span>
      <br />
      <img src="/images/green_circle.svg" alt="green circle" />
      <Span className="gray100-span-12">{{property.status}}</Span>
      <br />
      <img src="/images/bathrooms.svg" alt="bathrooms" />
      <Span className="gray100-span-12">{{property.bathrooms}}</Span>
      <img src="/images/beds.svg" alt="bathrooms" />
      <Span className="gray100-span-12">{{property.beds}}</Span>
      <img src="/images/area.svg" alt="area" />
      <Span className="gray100-span-12">{{property.area}} sqft </Span>
      <Span className="orange-span-16">{{property.price}} AED/yr</Span>
    </div>
  </a-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Span from "@/components/ui/Span.vue";
import { IDashboardPropertyItem } from "@/models/index";

export default defineComponent({
  props: {
    property: {
      type: Object as PropType<IDashboardPropertyItem>,
      required: true,
    },
  },
  components: {
    Span,
  },
});
</script>

<style scoped>

.property-card-wrapper {
  margin: 12px;
}

@media (max-width: 992px) {
  .property-card-wrapper {
  margin: 12px 4px;
}
}
</style>