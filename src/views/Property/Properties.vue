<template>
  <div class="filters-wrapper">
    <a-input-search
      v-model:value="search"
      placeholder="Search"
      style="width: 308px;"
      size="large"
      @search="onChangeSearchText"
    />
    <a-select size="large" style="width: 200px" @change="onChangePropertyStatus" v-model:value="defaultPropertyStatus">
      <a-select-option value="all">Properties: All</a-select-option>
      <a-select-option :value="PropertyStatus.AVAILABLE">{{PropertyStatus.AVAILABLE}}</a-select-option>
      <a-select-option :value="PropertyStatus.NOT_AVAILABLE">{{PropertyStatus.NOT_AVAILABLE}}</a-select-option>
    </a-select>
    <Button className="blue-white" size="large" @click="onAddProperty">+ Add Property</Button>
  </div>
  <div class="cards-wrapper">
    <a-row justify="center">
      <property-list 
        :settings="propertyService.pageSettings"
        @edit-property="(property) => onEditProperty(property)" 
        @delete-property="(id) => onDeleteProperty(id)"
        @change-page="(current) => onChangePage(current)"
      />
      <a-modal 
        v-model:visible="visible" 
        :title="currentProperty && currentProperty.id ? 'Update Property' : 'Create Property'" 
        :footer="null"
        :destroyOnClose="true"
      >
        <property-form 
          :property="currentProperty" 
          @submit-propertyform="(property) => onSubmitProperty(property)"
          @close-propertyform="visible = false"
        />
      </a-modal>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { IEditCreatePropertyDto, IProperty, PropertyStatus } from "@/models/Property"
import Button from '@/components/ui/Button.vue';
import PropertyForm from "@/views/Property/PropertyForm.vue"
import PropertyList from "@/views/Property/PropertyList.vue"

export default defineComponent({
  name: "properties",
  components: {
    Button,
    PropertyForm,
    PropertyList
  },
  setup() {
    const propertyService = ServiseFactory.getfPropertyServise();
    const search = ref<string>(propertyService.pageSettings.filters[0].value)
    function onChangeSearchText(searchValue: string): void {
      (searchValue.trim().length === 0) ? propertyService.pageSettings.filters[0].value='' : propertyService.pageSettings.filters[0].value=searchValue;
      propertyService.pageSettings.pagination.current_page=1;
      propertyService.getAll();
    }
    function onChangePropertyStatus(value: string): void {
      value === 'all' ? propertyService.pageSettings.filters[1].value='' : propertyService.pageSettings.filters[1].value=value;
      propertyService.pageSettings.pagination.current_page=1;
      propertyService.getAll();
    }
    
    // form
    const currentProperty: Ref<IProperty | null> = ref(null);
    const visible = ref<boolean>(false);

    function onAddProperty(): void {
      currentProperty.value=null;
      visible.value=true;
    }
    function onSubmitProperty(property: IEditCreatePropertyDto): void {
      property.id ? propertyService.update(property) : propertyService.create(property);
      currentProperty.value = null;
      visible.value=false;
    }

    // actions
    function onEditProperty(property: IProperty): void {
      currentProperty.value=property;
      visible.value=true;
    }
    function onDeleteProperty(id: number): void {
      propertyService.delete(id);
    }

    function onChangePage(current: number): void {
      propertyService.pageSettings.pagination.current_page=current;
      propertyService.getAll()
    } 

    onMounted(() => propertyService.getAll());

    return {
      propertyService, search, onChangeSearchText, onChangePropertyStatus,
      defaultPropertyStatus: ref('all'), PropertyStatus,
      visible, onSubmitProperty, currentProperty, onAddProperty,
      onEditProperty, onDeleteProperty, onChangePage,
    };
  }
});
</script>

<style scoped>
.cards-wrapper {
  margin: 12px 32px;
  min-height: 100vh;
}

@media (max-width: 992px) {
  .cards-wrapper {
    margin: 12px auto;
  }
}
</style>
