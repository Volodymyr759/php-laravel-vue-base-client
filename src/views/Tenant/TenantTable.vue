<template>
  <a-table :columns="columns" :data-source="tenants" :pagination="false" :loading="isLoading">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <span>{{ record.first_name }} {{ record.last_name }}</span>
      </template>
      <template v-else-if="column.key === 'leaseCount'">
        <span>
          {{ record.leases ? record.leases.length : 0 }}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a-tooltip placement="topLeft" title="Edit" arrow-point-at-center>
            <a @click="onEdit(record)">
              <a-space>
                <img src="/images/edit.svg" alt="edit" />
              </a-space>
            </a>
          </a-tooltip>
          <a-divider type="vertical" />
          <a-tooltip placement="topLeft" title="Unknown" arrow-point-at-center>
            <a @click="onUnknown(record.id)">
              <a-space>
                <img src="/images/sign_in_squre.svg" alt="sign_in_squre" />
              </a-space>
            </a>
          </a-tooltip>
          <a-divider type="vertical" />
          <a-tooltip placement="topLeft" title="Delete" arrow-point-at-center>
            <a @click="onDelete(record.id)">
              <a-space>
                <img src="/images/delete.svg" alt="delete" />
              </a-space>
            </a>
          </a-tooltip>
        </span>
      </template>
    </template>
  </a-table>

  <div>
    <a-pagination size="small" 
      v-model:current="pageSettings.pagination.current_page"
      :page-size="pageSettings.pagination.per_page" 
      :total="total" 
      @change="onChangePage" 
    />
  </div>
</template>

<script lang="ts">
import { computed, createVNode, defineComponent, PropType } from "vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import store from '@/store';
import { ITenant, IEditCreateTenantDto } from "@/models/Tenant";
import { IPageSettings } from "@/services/types";
import { columns } from "@/views/Tenant/columns";

export default defineComponent({
  name: "tenant-table",
  props: {
    settings: {
      type: Object as PropType<IPageSettings>,
      required: true
    }
  },
  emits: ['change-page','edit-tenant', 'delete-tenant', 'unknown-tenant'],
  setup(props, { emit }) {
    const tenants = computed<ITenant[]>(() => store.state.tenants.tenants)
    const total = computed<number>(() => store.state.tenants.total);
    
    const pageSettings: IPageSettings = props.settings;

    // actions
    function onEdit(tenant: IEditCreateTenantDto): void {
      emit('edit-tenant', tenant);
    }
    function onDelete(id: number): void {
      Modal.confirm({
        title: 'Do you want to delete this tenant?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, 'The tenant will be removed immediately.'),
        onOk() { emit('delete-tenant', id); },
        onCancel() { console.log('Cancel'); }
      });
    }
    function onUnknown(id: number): void {
      emit('unknown-tenant', id);
    }

    function onChangePage(current: number): void {
      return emit('change-page', current);
    }

    return {
      columns, tenants, total, onChangePage, pageSettings, 
      isLoading: computed<boolean>(() => store.state.base.isLoading),
      onEdit, onUnknown, onDelete
    };
  },
});
</script>
