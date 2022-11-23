<template>
  <a-form :model="tenantDto" name="tenant" @finish="onSubmit">
      <a-form-item name="id" v-show="false">
        <a-input v-model:value="tenantDto.id"/>
      </a-form-item>
      <a-form-item name="first_name" label="First Name" :rules="[{ required: true, message: 'First name is required.', max: 25 }]">
        <a-input v-model:value="tenantDto.first_name" show-count :maxlength="25" placeholder="First Name" />
      </a-form-item>
      <a-form-item name="last_name" label="Last Name" :rules="[{ required: true, message: 'Last name is required.' }]">
        <a-input v-model:value="tenantDto.last_name" show-count :maxlength="25" placeholder="Last Name" />
      </a-form-item>
      <a-form-item name="email" label="Email" :rules="[{ required: true, message: 'Email is required.' }]">
        <a-input v-model:value="tenantDto.email" type="email" show-count :maxlength="50" placeholder="Email" />
      </a-form-item>
      <a-form-item name="phone" label="Phone" :rules="[{ required: true, message: 'Phone number is required.' }]">
        <a-input v-model:value="tenantDto.phone" html-type="tel" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}" show-count :maxlength="20" placeholder="12-345-678-1111" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="emit('close-tenantform')">Cancel</a-button>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { IEditCreateTenantDto, ITenant } from "@/models/Tenant";

export default defineComponent({
  name: "tenant-form",
  props: {
    tenant: {
      type: Object as PropType<ITenant> || null,
      required: false
    }
  },
  emits: ['close-tenantform', 'submit-tenantform'],
  setup(props, { emit }) {
    const tenantDto = reactive<IEditCreateTenantDto>(props.tenant 
      ? ServiseFactory.createNewTenantDto(props.tenant.id, props.tenant.first_name, props.tenant.last_name, 
        props.tenant.email, props.tenant.phone) 
      : {} as IEditCreateTenantDto);
    function onSubmit(tenantDto: IEditCreateTenantDto): void {
      emit('submit-tenantform', tenantDto);
    }

    return {
      onSubmit, tenantDto, emit
    }
  },
});
</script>
