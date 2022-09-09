<template>
  <div class="filters-wrapper">
    <a-row style="margin: 0 84px; min-height: 72px; align-items: center">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" style="margin: 5px; padding: 5px;">
        <a-input-search
          v-model:value="searchText"
          placeholder="Search"
          style="width: 308px; height: 46px;"
          size="large"
          @search="onSearch"
        />
      </a-col>
    </a-row>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <!-- <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                
              </span>
            </template>
          </template> -->
          
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <img :src="'https://picsum.photos/200/300?random=' + record.key" alt="photo" width="65" height="37" />
              <span>&nbsp;&nbsp;&nbsp;{{ record.name }}</span>
            </template>
            <template v-else-if="column.key === 'leaseStatus'">
              <div v-if="record.leaseStatus === 'Status 1'"  style="text-align: center">
                <img src="/images/green_circle.svg" alt="green circle" style="margin: 0 8px 3px 0"/>{{record.leaseStatus}}
              </div>
              <div v-else style="text-align: center">
                <img src="/images/red_ellipse.svg" alt="red ellipse" style="margin: 0 8px 3px 0"/>{{record.leaseStatus}}
              </div>
            </template>
            <template v-else-if="column.key === 'documents'">
              <div style="display: flex; align-items: center">
                <img src="/images/docs.svg" alt="docs" />&nbsp;
                <Span className="blue-span-16">{{record.documents}}</Span>
              </div>
            </template>
            <template v-else-if="column.key === 'tenants'">
              <a-avatar size="large" :src="record.tenants" />
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="onUnknown(record.key)">
                  <a-space>
                    <img src="/images/refresh_2.svg" alt="refresh" />
                  </a-space>
                </a>
                <a-divider type="vertical" />
                <a @click="onDelete(record.key)">
                  <a-space>
                    <img src="/images/delete.svg" alt="delete" />
                  </a-space>
                </a>
              </span>
            </template>
          </template>
        </a-table>
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
import { defineComponent, ref } from "vue";
import Span from "@/components/ui/Span.vue";

const columns = [
  {
    title: "PROPERTY NAME",
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PROPERTY ADDRESS",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "LEASE STATUS",
    dataIndex: "leaseStatus",
    key: "leaseStatus",
  },
  {
    title: "DOC(S)",
    dataIndex: "documents",
    key: "documents",
  },
  {
    title: "START - END DATE",
    dataIndex: "dates",
    key: "dates",
  },
  {
    title: "TENANT(S)",
    dataIndex: "tenants",
    key: "tenants",
  },
  {
    title: "ACTIONS",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "Crown Beach House Maldives",
    age: 32,
    address: "New York No. 1 Lake Park",
    leaseStatus: "Status 1",
    documents: 2,
    dates: "2020-06-19 / 2022-06-18",
    tenants: "https://joeschmoe.io/api/v1/1",
  },
  {
    key: "2",
    name: "Anantara World Islands Dubai Resort",
    age: 42,
    address: "London No. 1 Lake Park",
    leaseStatus: "Status 2",
    documents: 1,
    dates: "2020-07-17 / 2022-07-17",
    tenants: "https://joeschmoe.io/api/v1/2",
  },
  {
    key: "3",
    name: "Bulgari Hotel & Resorts, Dubai",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 3",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/3",
  },
  {
    key: "4",
    name: "Crown Beach House Maldives",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 1",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/4",
  },
  {
    key: "5",
    name: "Anantara World Islands Dubai Resort",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 2",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/1",
  },
  {
    key: "6",
    name: "Bulgari Hotel & Resorts, Dubai",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 3",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/2",
  },
  {
    key: "7",
    name: "Crown Beach House Maldives",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 1",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/3",
  },
  {
    key: "8",
    name: "Anantara World Islands Dubai Resort",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 2",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/4",
  },
  {
    key: "9",
    name: "Bulgari Hotel & Resorts, Dubai",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 3",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/1",
  },
  {
    key: "10",
    name: "Crown Beach House Maldives",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 1",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/2",
  },
  {
    key: "11",
    name: "Anantara World Islands Dubai Resort",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 2",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/3",
  },
  {
    key: "12",
    name: "Bulgari Hotel & Resorts, Dubai",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    leaseStatus: "Status 3",
    documents: 3,
    dates: "2021-08-18 / 2022-08-18",
    tenants: "https://joeschmoe.io/api/v1/4",
  },
];

export default defineComponent({
  components: {
    Span
  },
  setup() {
    const searchText = ref<string>('');
    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', searchText.value);
    };

    return {
      data,
      columns,
      onDelete: (id: string) => alert(`Delete button has been clicked, id: ${id}`),
      onSearch,
      onUnknown: (id: string) => alert(`Unknown button has been clicked, id: ${id}`),
      pagination: {
        size: "small",
        hideOnSinglePage: true,
        defaultPageSize: 10,
        position: ["bottomCenter"]
      },
      searchText
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