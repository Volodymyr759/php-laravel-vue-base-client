<template>
  <div class="filters-wrapper">
    <a-row style="margin: 0 84px; min-height: 72px; align-items: center; justify-content: space-between">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" style="margin: 5px; padding: 5px; text-align: center">
        <a-input-search
          v-model:value="searchText"
          placeholder="Search"
          style="width: 308px; height: 46px;"
          size="large"
          @search="onSearch"
        />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <a-select size="large" style="width: 200px" @change="handleChangePropertyStatus" v-model:value="defaultPropertyStatus">
          <a-select-option value="all">Properties: All</a-select-option>
          <a-select-option value="available">Available</a-select-option>
          <a-select-option value="not_available">Not Available</a-select-option>
        </a-select>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <Button className="blue-white" size="large" @click="showAlert">+ Add Property</Button>
      </a-col>
    </a-row>
  </div>
  <div class="cards-wrapper">
    <a-row justify="center">
      <PropertyCard v-for="item in properties" :property="item" :key="item.id"/>
    </a-row>
  </div>
  <section class="issues">
    <ul :style="{ padding: '0 20px' }">
      <li>Unknown how to paginate in tile-layout case</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PropertyCard from '@/components/PropertyCard.vue';
import Button from '@/components/ui/Button.vue';

const properties = [
        {
          id: "q1",
          imgSrc: "/images/test_property1.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q2",
          imgSrc: "/images/test_property2.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q3",
          imgSrc: "/images/test_property1.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q4",
          imgSrc: "/images/test_property2.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q5",
          imgSrc: "/images/test_property1.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q6",
          imgSrc: "/images/test_property2.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        }
      ]

export default defineComponent({

  components: {
    Button,
    PropertyCard
  },
  setup() {
    const searchText = ref<string>('');
    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', searchText.value);
    };

    const handleChangePropertyStatus = (value: string) => { console.log(`selected property status: ${value}`) };

    const showAlert = () => { alert("AddProperty button is not implemented yet") }

    return {
      searchText,
      onSearch,
      defaultPropertyStatus: ref('all'),
      handleChangePropertyStatus,
      properties,
      showAlert
    };
  }
});
</script>

<style scoped>
.cards-wrapper {
  margin: 12px 32px;
}

@media (max-width: 992px) {
  .cards-wrapper {
    margin: 12px auto;
  }
}
</style>
