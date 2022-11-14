<template>
    <a-form :model="propertyDto" name="property" @finish="onSubmit">
      <a-form-item name="id" v-show="false">
        <a-input v-model:value="propertyDto.id" />
      </a-form-item>
      <a-form-item name="address" label="Address" :rules="[{ required: true, max: 255, message: 'Address is required.' }]">
        <a-input v-model:value="propertyDto.address" show-count :maxlength="255" placeholder="Address" />
      </a-form-item>
      <a-form-item name="baths" label="Bath rooms" :rules="[{ required: true, message: 'Number of baths is required (1-100).' }]">
        <a-input-number v-model:value="propertyDto.baths" class="property-input-number" :min="1" :max="100" placeholder="Bath rooms" />
      </a-form-item>
      <a-form-item name="beds" label="Beds" :rules="[{ required: true, message: 'Number of bedrooms is required (1-100).' }]">
        <a-input-number v-model:value="propertyDto.beds" class="property-input-number" :min="1" :max="100" placeholder="Beds" />
      </a-form-item>
      <a-form-item name="square" label="Square" :rules="[{ required: true, message: 'Square of property is required (1-10000).' }]">
        <a-input-number v-model:value="propertyDto.square" class="property-input-number" :min="1" :max="10000" placeholder="Square" />
      </a-form-item>
      <a-form-item name="price" label="Price" :rules="[{ required: true, message: 'Price of lease per month is required (1-1000000).' }]">
        <a-input-number v-model:value="propertyDto.price" class="property-input-number" :min="1" :max="1000000" placeholder="Price" />
      </a-form-item>
      <a-form-item name="status" label="Status" :rules="[{ required: true, message: 'Please pick an status.' }]">
        <a-radio-group v-model:value="propertyDto.status">
          <a-radio :value="PropertyStatus.AVAILABLE">{{PropertyStatus.AVAILABLE}}</a-radio>
          <a-radio :value="PropertyStatus.NOT_AVAILABLE">{{PropertyStatus.NOT_AVAILABLE}}</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="emit('close-propertyform')">Cancel</a-button>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { IEditCreatePropertyDto, PropertyStatus } from "@/models/Property";

export default defineComponent({
  name: "property-form",
  props: {
    property: {
      type: Object as PropType<IEditCreatePropertyDto>,// || null,
      required: false
    }
  },
  emits: ['close-propertyform', 'submit-propertyform'],
  setup(props, { emit }) {
    const propertyDto = reactive<IEditCreatePropertyDto>(
      props.property ? ServiseFactory.createNewPropertyDto(props.property.id, props.property.address, 
        props.property.status, props.property.baths, props.property.beds, props.property.square, props.property.price)
        : {} as IEditCreatePropertyDto
    );
    function onSubmit(propertyData: IEditCreatePropertyDto): void {
      return emit('submit-propertyform', propertyData);
    }
    return {
      onSubmit, propertyDto, emit, PropertyStatus
    }
  },
});
</script>

<style scoped>
  .property-input-number {
    width: 133px;
  }
</style>
