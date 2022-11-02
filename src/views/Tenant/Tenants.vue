<template>
  <div class="filters-wrapper">
    <a-row style="margin: 0 84px; min-height: 72px; align-items: center; justify-content: space-between;">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" style="margin: 5px; padding: 5px; text-align: center" >
        <a-input-search v-model:value="search" placeholder="Search" style="width: 308px; height: 46px" size="large"
          @search="onChangeSearchText"/>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <a-select size="large" style="width: 200px" @change="onChangeSort" v-model:value="defaultSort">
          <a-select-option value="id_desc">Sort By: Newest first</a-select-option>
          <a-select-option value="id_asc">Oldest first</a-select-option>
          <a-select-option value="name_asc">Name: A->Z</a-select-option>
          <a-select-option value="name_desc">Name: Z->A</a-select-option>
          <a-select-option value="email_asc">Email: A->Z</a-select-option>
          <a-select-option value="email_desc">Email: Z->A</a-select-option>
        </a-select>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center" >
        <Button className="blue-white" size="large" @click="onAddTenant">+ Add Tenant</Button>
      </a-col>
    </a-row>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <tenant-table 
          :settings="tenantService.pageSettings"
          @edit-tenant="(tenant) => onEditTenant(tenant)" 
          @delete-tenant="(id) => onDeleteTenant(id)"
          @unknown-tenant="(id) => onUnknownTenantAction(id)"
          @change-page="(current) => onChangePage(current)"
        />
        <a-modal 
          v-model:visible="visible" 
          :title="currentTenant && currentTenant.id ? 'Update Tenant': 'Create Tenant'" 
          :footer="null"
          :destroyOnClose="true"
        >
          <tenant-form 
            :tenant="currentTenant"
            @submit-tenantform="(tenant) => onSubmitTenant(tenant)"
            @close-tenantform="visible = false"
          />
        </a-modal>
      </a-col>
    </a-row>
  </div>
  <section class="issues">
    <ul style="padding: '0 20px'; list-style: none">
      <li>Destination of right arrow icon? (middle icon in actions)</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { ServiseFactory } from "@/services/ServiseFactory";
import { ITenant, IEditCreateTenantDto } from "@/models/Tenant";
import TenantForm from "@/views/Tenant/TenantForm.vue";
import TenantTable from "@/views/Tenant/TenantTable.vue";
import { Button } from "@/components/ui";

export default defineComponent({
  name: "tenants",
  components: {
    Button,
    TenantForm,
    TenantTable
  },
  setup() {
    const tenantService = ServiseFactory.getTenantsServise();
    const search = ref<string>(tenantService.pageSettings.filters[0].value)
    function onChangeSearchText(searchValue: string): void {
      (searchValue.trim().length === 0) ? tenantService.pageSettings.filters[0].value = '' : tenantService.pageSettings.filters[0].value = searchValue;
      tenantService.pageSettings.pagination.current_page=1;
      tenantService.getAll();
    };
    function onChangeSort(sortValue: string): void {
      switch(sortValue) {
        case 'id_asc':
          tenantService.pageSettings.sorting=[{ field: 'id', direction: 'asc' }];
          break;
        case 'name_asc':
          tenantService.pageSettings.sorting=[{ field: 'name', direction: 'asc' }];
          break;
        case 'name_desc':
          tenantService.pageSettings.sorting=[{ field: 'name', direction: 'desc' }];
          break;
        case 'email_asc':
          tenantService.pageSettings.sorting=[{ field: 'email', direction: 'asc' }];
          break;
        case 'email_desc':
          tenantService.pageSettings.sorting=[{ field: 'email', direction: 'desc' }];
          break;
        default: // 'id_desc' - newest first
          tenantService.pageSettings.sorting=[{ field: 'id', direction: 'desc' }];
      }
      tenantService.getAll();
    };

    // form
    const currentTenant: Ref<ITenant | null> = ref(null);
    const visible = ref<boolean>(false);
    
    function onAddTenant(): void {
      currentTenant.value = null;
      visible.value=true;
    }
    function onSubmitTenant(tenant: IEditCreateTenantDto): void {
      tenant.id ? tenantService.update(tenant) : tenantService.create(tenant);
      currentTenant.value = null;
      visible.value=false;
    }

    // table actions
    function onEditTenant(tenant: ITenant): void {
      currentTenant.value=tenant;
      visible.value=true;
    }
    function onDeleteTenant(id: number): void {
      tenantService.delete(id);
    }
    function onUnknownTenantAction(id: number): void {
      alert(`onUnknown function is not implemented yet, id: ${id}`);
    }
    function onChangePage(current: number): void {
      tenantService.pageSettings.pagination.current_page=current;
      tenantService.getAll()
    } 

    onMounted(() => tenantService.getAll());

    return {
      tenantService, search, onChangeSearchText, onChangeSort,
      defaultSort: ref('id_desc'),
      onAddTenant, currentTenant, visible,
      onEditTenant, onDeleteTenant, onUnknownTenantAction, onChangePage,
      onSubmitTenant
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