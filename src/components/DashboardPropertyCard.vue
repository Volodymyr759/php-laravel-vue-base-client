<template>
  <a-col class="dashboard-column" :xs="24" :md="11" :lg="11">
    <div>
      <img src="/images/test_property1.png" alt="property photo" class="dashboard-card-image" />
      <br />
      <img src="/images/home_dashboard.svg" alt="home icon" class="card-icon"/>
      <Span className="gray80-span-16">
        {{property.address}}
      </Span>
      <br />
      <img src="/images/geo_pin.svg" alt="geo icon" />
      <Span className="gray80-span-12">{{property.address}}</Span>
      <br />
      <img src="/images/green_circle.svg" alt="green circle" />
      <Span className="gray100-span-12">Available</Span>
      <a-row>
        <a-col :span="10">
          <img src="/images/bathrooms.svg" alt="bathrooms" />
          <Span className="gray100-span-12">{{property.baths}}</Span>&nbsp;
          <img src="/images/beds.svg" alt="bathrooms" />
          <Span className="gray100-span-12">{{property.beds}}</Span>&nbsp;
          <img src="/images/area.svg" alt="area" />
          <Span className="gray100-span-12">{{property.square}} sqft</Span>
        </a-col>
        <a-col :span="7" :offset="7" style="text-align: right">
          <Span className="orange-span-16">{{property.price}} AED/yr</Span>
        </a-col>
      </a-row>
    </div>
  </a-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Span from "@/components/ui/Span.vue";
import { IProperty } from "@/models/Property";

export default defineComponent({
  props: {
    property: {
      type: Object as PropType<IProperty>,
      required: true,
    },
  },
  components: {
    Span,
  },
});
</script>

<style scoped>
.dashboard-column {
  margin: 8px;
}

.card-icon {
  margin: 0 4px 4px 0;
}
</style>
