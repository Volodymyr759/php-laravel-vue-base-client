<template>
  <a-form :model="leaseDto" name="lease" @finish="onSubmit">
    <a-form-item name="id" v-show="false">
      <a-input v-model:value="leaseDto.id" type="hidden" />
    </a-form-item>
    <a-form-item name="property_id" label="Property" :rules="[{ required: true, message: 'Choose the property.' }]">
      <a-input v-model:value="leaseDto.property_id" type="hidden" />
      <a-form-item-rest>
        <a-auto-complete
          :allowClear="true"
          v-model:value="propertyValue"
          :options="propertyDataSource"
          style="width: 350px"
          placeholder="Search by address"
          @select="onPropertySelect"
          @change="onSearchPropertyChange"
        />
      </a-form-item-rest>
    </a-form-item>
    <a-form-item name="tenant_id" label="Tenant" :rules="[{ required: true, message: 'Choose the tenant.' }]">
      <a-input v-model:value="leaseDto.tenant_id" type="hidden" />
      <a-form-item-rest>
        <a-auto-complete
          :allowClear="true"
          v-model:value="tenantValue"
          :options="tenantDataSource"
          style="width: 350px"
          placeholder="Search by name"
          @select="onTenantSelect"
          @change="onSearchTenantChange"
        />
      </a-form-item-rest>
    </a-form-item>
    <a-form-item name="start_date" label="Start Date" :rules="[{ required: true, message: 'Choose the date.' }]">
      <a-date-picker v-model:value="leaseDto.start_date" value-format="YYYY-MM-DD" />
    </a-form-item>
    <a-form-item name="end_date" label="End Date" :rules="[{ required: true, message: 'Choose the date.' }]">
      <a-date-picker v-model:value="leaseDto.end_date" value-format="YYYY-MM-DD" />
    </a-form-item>
    <a-form-item name="status" label="Status" :rules="[{ required: true, message: 'Choose the status.' }]">
      <a-select style="width: 200px" v-model:value="leaseDto.status" placeholder="Please select a status.">
          <a-select-option :value="LeaseStatus.REQUESTED">{{LeaseStatus.REQUESTED}}</a-select-option>
          <a-select-option :value="LeaseStatus.APPROVED">{{LeaseStatus.APPROVED}}</a-select-option>
          <a-select-option :value="LeaseStatus.IN_PROGRESS">{{LeaseStatus.IN_PROGRESS}}</a-select-option>
          <a-select-option :value="LeaseStatus.REJECTED">{{LeaseStatus.REJECTED}}</a-select-option>
          <a-select-option :value="LeaseStatus.COMPLETED">{{LeaseStatus.COMPLETED}}</a-select-option>
        </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="emit('close-leaseform')">Cancel</a-button>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { IEditCreateLeaseDto, ILease, LeaseStatus } from "@/models/Lease";
import { ISearchPropertyByAddressDto } from "@/models/Property";
import { ISearchTenantByFullName } from "@/models/Tenant";

export default defineComponent({
  name: "lease-form",
  props: {
    lease: {
      type: Object as PropType<ILease> || null,
      required: false
    }
  },
  emits: ['close-leaseform', 'submit-leaseform'],
  setup(props, { emit }) {
    const propertyService = ServiseFactory.getfPropertyServise();
    const tenantService = ServiseFactory.getTenantsServise();
    const leaseDto = reactive<IEditCreateLeaseDto>(
      props.lease ? ServiseFactory.createNewLeaseDto(props.lease.id, props.lease.property_id, props.lease.tenant_id,
        props.lease.start_date, props.lease.end_date, props.lease.status)
        : {} as IEditCreateLeaseDto
    );

    // Property Autocopmlete
    const propertyValue = ref<string>(props.lease ? props.lease.property.address : '');
    const propertyDataSource = ref<{ value: string }[]>([]);
    const onSearchPropertyChange = async (searchText: string) => {
      if (!searchText || searchText.trim().length < 2) return;
      propertyDataSource.value = (await propertyService.searchProperties(searchText.trim()))
        .map((property) => ({
          value: property.address,
          id: property.id
        }));
    };
    function onPropertySelect(value: string, option: ISearchPropertyByAddressDto) {
      return leaseDto.property_id=option.id;
    }

    // Tenant Autocopmlete
    const tenantValue = ref<string>(props.lease ? props.lease.tenant.first_name + ' ' + props.lease.tenant.last_name : '');
    const tenantDataSource = ref<{value: string}[]>([]);
    const onSearchTenantChange = async (searchText: string) => {
      if (!searchText || searchText.trim().length < 2) return;
      tenantDataSource.value = (await tenantService.searchTenants(searchText.trim()))
        .map((tenant) => ({
          value: tenant.fullName,
          id: tenant.id
        }));
    };
    function onTenantSelect(value: string, option: ISearchTenantByFullName) {
      return leaseDto.tenant_id=option.id;
    }

    function onSubmit(leaseData: IEditCreateLeaseDto): void {
      emit('submit-leaseform', leaseData);
    }

    return {
      propertyValue, propertyDataSource, onSearchPropertyChange, onPropertySelect,
      tenantValue, tenantDataSource, onSearchTenantChange, onTenantSelect,
      onSubmit, leaseDto, emit, 
      LeaseStatus
    }
  }
});
</script>
