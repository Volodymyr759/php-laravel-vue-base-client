<template>
  <div class="filters-wrapper">
    <a-row style="margin: 0 84px; min-height: 72px; align-items: center">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" style="margin: 5px; padding: 5px;">
        <a-input-search
          v-model:value="search"
          placeholder="Search"
          style="width: 308px; height: 46px;"
          size="large"
          @search="onChangeSearchText"
        />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <a-select size="large" style="width: 200px" @change="onChangeLeaseStatus" v-model:value="defaultLeaseStatus">
          <a-select-option value="All">Leases: All</a-select-option>
          <a-select-option :value="LeaseStatus.REQUESTED">{{LeaseStatus.REQUESTED}}</a-select-option>
          <a-select-option :value="LeaseStatus.APPROVED">{{LeaseStatus.APPROVED}}</a-select-option>
          <a-select-option :value="LeaseStatus.IN_PROGRESS">{{LeaseStatus.IN_PROGRESS}}</a-select-option>
          <a-select-option :value="LeaseStatus.REJECTED">{{LeaseStatus.REJECTED}}</a-select-option>
          <a-select-option :value="LeaseStatus.COMPLETED">{{LeaseStatus.COMPLETED}}</a-select-option>
        </a-select>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <Button className="blue-white" size="large" @click="onCreateLease">+ Create</Button>
      </a-col>
    </a-row>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <lease-table 
          :settings="leaseService.pageSettings"
          @edit-lease="(lease) => onEditLease(lease)" 
          @delete-lease="(id) => onDeleteLease(id)"
          @change-page="(current) => onChangePage(current)"
        />
        <a-modal 
          v-model:visible="visible" 
          :title="currentLease && currentLease.id ? 'Update Lease': 'Create Lease'" 
          :footer="null"
          :destroyOnClose="true"
        >
          <lease-form 
            :lease="currentLease"
            @submit-leaseform="(lease) => onSubmitLease(lease)"
            @close-leaseform="visible = false"  
          />
        </a-modal>
      </a-col>
    </a-row>
  </div>
  <section class="issues">
    <ul style="padding: '0 20px'; list-style: none">
      <li>LEASE STATUS - possible values ?</li>
      <li>2 arrows - button in Actions column - unknown destination</li>
      <li>Where document-files have to be stored ?</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { IEditCreateLeaseDto, ILease, LeaseStatus } from "@/models/Lease";
import LeaseForm from "@/views/Lease/LeaseForm.vue";
import LeaseTable from "@/views/Lease/LeaseTable.vue";
import { Button } from "@/components/ui";

export default defineComponent({
  name: "leases",
  components: {
    LeaseForm,
    LeaseTable,
    Button
  },
  setup() {
    const leaseService = ServiseFactory.getLeaseServise();
    const search = ref<string>(leaseService.pageSettings.filters[0].value)
    function onChangeSearchText(searchValue: string): void {
      (searchValue.trim().length === 0) ? leaseService.pageSettings.filters[0].value='' : leaseService.pageSettings.filters[0].value=searchValue;
      leaseService.pageSettings.pagination.current_page=1;
      leaseService.getAll();
    }
    function onChangeLeaseStatus(value: string): void {
      value === 'All' ? leaseService.pageSettings.filters[1].value='' : leaseService.pageSettings.filters[1].value=value;
      leaseService.pageSettings.pagination.current_page=1;
      leaseService.getAll();
    }

    // form
    const visible = ref<boolean>(false);
    const currentLease: Ref<ILease | null> = ref(null);

    function onCreateLease(): void {
      currentLease.value=null;
      visible.value=true;
    }
    function onSubmitLease(lease: IEditCreateLeaseDto): void {
      lease.id ? leaseService.update(lease) : leaseService.create(lease);
      currentLease.value = null;
      visible.value=false;
    }

    // actions
    function onEditLease(lease: ILease): void {
      currentLease.value=lease;
      visible.value=true;
    }
    function onDeleteLease(id: number): void {
      leaseService.delete(id);
    }
    function onChangePage(current: number): void {
      leaseService.pageSettings.pagination.current_page=current;
      leaseService.getAll();
    } 

    onMounted(() => leaseService.getAll());

    return {
      leaseService, search, onChangeSearchText, onChangeLeaseStatus,
      defaultLeaseStatus: ref('All'), LeaseStatus,
      visible, onSubmitLease, currentLease, onCreateLease, 
      onEditLease, onDeleteLease, onChangePage,
    };
  },
});
</script>

<style scoped>
.dashboard-container {
  margin: 12px 75px;
  background-color: green;
}

.dashboard-column {
  margin: 8px;
  background-color: teal;
}
</style>