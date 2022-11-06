<template>
  <a-table :columns="columns" :data-source="leases" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'address'">
        <span>&nbsp;&nbsp;&nbsp;{{ record.property.address }}</span>
      </template>
      <template v-else-if="column.key === 'status'">
        <div v-if="record.status === LeaseStatus.REQUESTED" >
          <img src="/images/orange_circle.svg" alt="green circle" class="circle-item"/>
          {{ record.status }}
        </div>
        <div v-else-if="record.status === LeaseStatus.APPROVED">
          <img src="/images/yellow_circle.svg" alt="red ellipse" class="circle-item"/>
          {{ record.status }}
        </div>
        <div v-else-if="record.status === LeaseStatus.IN_PROGRESS">
          <img src="/images/green_circle.svg" alt="red ellipse" class="circle-item"/>
          {{ record.status }}
        </div>
        <div v-else-if="record.status === LeaseStatus.REJECTED">
          <img src="/images/red_ellipse.svg" alt="red ellipse" class="circle-item"/>
          {{ record.status }}
        </div>
        <div v-else-if="record.status === LeaseStatus.COMPLETED">
          <img src="/images/blue_ellipse.svg" alt="red ellipse" class="circle-item"/>
          {{ record.status }}
        </div>
      </template>
      <template v-else-if="column.key === 'start_date'">
        <div class="text-align-center">
          {{ new Date(record.start_date).toLocaleDateString() }}
        </div>
      </template>
      <template v-else-if="column.key === 'end_date'">
        <div class="text-align-center">
          {{ new Date(record.end_date).toLocaleDateString() }}
        </div>
      </template>
      <template v-else-if="column.key === 'documents'">
        <div class="document-item">
          <img src="/images/docs.svg" alt="docs" />&nbsp;
          <Span className="blue-span-16">{{ record.documents.length }}</Span>
        </div>
      </template>
      <template v-else-if="column.key === 'tenant'">
        {{ record.tenant.first_name + ' ' + record.tenant.last_name }}
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
          <a-tooltip placement="topLeft" title="Delete" arrow-point-at-center>
            <a @click="onDelete(record.key)">
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
    <a-pagination
      size="small"
      v-model:current="pageSettings.pagination.current_page"
      :page-size="pageSettings.pagination.per_page"
      :total="total"
      @change="onChangePage"
    />
  </div>
</template>

<script lang="ts">
import { computed, createVNode, defineComponent, PropType } from "vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import store from "@/store";
import { ILease, LeaseStatus } from "@/models/Lease";
import { IPageSettings } from "@/services/types";
import { columns } from "@/views/Lease/columns";
import Span from "@/components/ui/Span.vue";

export default defineComponent({
  name: "lease-table",
  props: {
    settings: {
      type: Object as PropType<IPageSettings>,
      required: true,
    },
  },
  emits: ["change-page", "edit-lease", "delete-lease"],
  components: {
    Span,
  },
  setup(props, { emit }) {
    const leases = computed<ILease[]>(() => store.state.leases.leases);
    const total = computed<number>(() => store.state.leases.total);
    const pageSettings: IPageSettings = props.settings;

    // actions
    function onEdit(lease: ILease): void {
      emit("edit-lease", lease);
    }
    function onDelete(id: number): void {
      Modal.confirm({
        title: "Do you want to delete this lease?",
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode(
          "div",
          { style: "color:red;" },
          "The lease will be removed with related documents immediately."
        ),
        onOk() {
          emit("delete-lease", id);
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    }

    function onChangePage(current: number): void {
      return emit("change-page", current);
    }

    return {
      columns,
      leases,
      total,
      LeaseStatus,
      onChangePage,
      pageSettings,
      onEdit,
      onDelete,
    };
  },
});
</script>

<style scoped>
.document-item {
  display: flex;
  align-items: center;
}
</style>
