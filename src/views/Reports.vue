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
        <a-select size="large" style="width: 200px" @change="handleChangeReportStatus" v-model:value="defaultReportStatus">
          <a-select-option value="all">Status: All</a-select-option>
          <a-select-option value="new">New</a-select-option>
          <a-select-option value="inProgress">In Progress</a-select-option>
          <a-select-option value="updated">Updated</a-select-option>
          <a-select-option value="finished">Finished</a-select-option>
        </a-select>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7" style="margin: 5px; padding: 5px; text-align: center">
        <Button className="blue-white" size="large" @click="showAlert">+ New Report</Button>
      </a-col>
    </a-row>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'lease'">
              <img :src="'https://picsum.photos/200/300?random=' + record.key" alt="photo" width="65" height="37" />
              <span>&nbsp;&nbsp;&nbsp;{{ record.lease }}</span>
            </template>
            <template v-else-if="column.key === 'audit'">
              <img src="/images/message_light.svg" alt="message" />
              <span>&nbsp;{{ record.audit }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <div v-if="record.status === 'New'" style="text-align: center">
                <img src="/images/blue_ellipse.svg" alt="blue circle" style="margin: 0 8px 3px 0"/>{{record.status}}
              </div>
              <div v-else-if="record.status === 'In Progress'"  style="text-align: center">
                <img src="/images/yellow_circle.svg" alt="yellow circle" style="margin: 0 8px 3px 0"/>{{record.status}}
              </div>
              <div v-else-if="record.status === 'Updated'"  style="text-align: center">
                <img src="/images/orange_circle.svg" alt="orange circle" style="margin: 0 8px 3px 0"/>{{record.status}}
              </div>
              <div v-else-if="record.status === 'Finished'"  style="text-align: center">
                <img src="/images/green_circle.svg" alt="green circle" style="margin: 0 8px 3px 0"/>{{record.status}}
              </div>
            </template>
            <template v-else-if="column.key === 'report'">
              <div style="text-align: center; cursor: pointer;" @click="handleReport(record.key)">
                <img src="/images/blue_form.svg" alt="form" /><img src="/images/right_arrow.svg" alt="arrow" />
              </div>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
  <!-- <section class="issues">
    <ul style="padding: 0 20px">
      <li>Not designed</li>
    </ul>
  </section> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '@/components/ui/Button.vue';

const columns = [
  {
    title: "REPORT NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "LEASE",
    dataIndex: "lease",
    key: "lease",
  },
  {
    title: "AUDIT TRALE (LAST UPDATE)",
    dataIndex: "audit",
    key: "audit",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "REPORT",
    key: "report",
  },
];

const data = [
  {
    key: "1",
    name: 'Ingoing Condition Report 3150',
    lease: "Crown Beach House Maldives",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "New",
    report: "Test text 1"
  },
  {
    key: "2",
    name: 'Ingoing Condition Report 3151',
    lease: "Anantara World Islands Dubai Resort",
    audit: "Report opened by Farrukh Khan 15/02/22 at 08:04",
    status: "In Progress",
    report: "Test text 2"
  },
  {
    key: "3",
    name: 'Ingoing Condition Report 3152',
    lease: "Bulgari Hotel & Resorts, Dubai",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "In Progress",
    report: "Test text 3"
  },
  {
    key: "4",
    name: 'Ingoing Condition Report 3153',
    lease: "Crown Beach House Maldives",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Updated",
    report: "Test text 4"
  },
  {
    key: "5",
    name: 'Ingoing Condition Report 3154',
    lease: "Anantara World Islands Dubai Resort",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 5"
  },
  {
    key: "6",
    name: 'Ingoing Condition Report 3155',
    lease: "Bulgari Hotel & Resorts, Dubai",
    audit: "Report opened by Farrukh Khan 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 6"
  },
  {
    key: "7",
    name: 'Ingoing Condition Report 3156',
    lease: "Crown Beach House Maldives",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Updated",
    report: "Test text 7"
  },
  {
    key: "8",
    name: 'Ingoing Condition Report 3157',
    lease: "Anantara World Islands Dubai Resort",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 8"
  },
  {
    key: "9",
    name: 'Ingoing Condition Report 3158',
    lease: "Bulgari Hotel & Resorts, Dubai",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 9"
  },
  {
    key: "10",
    name: 'Ingoing Condition Report 3159',
    lease: "Crown Beach House Maldives",
    audit: "Report opened by Farrukh Khan 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 10"
  },
  {
    key: "11",
    name: 'Ingoing Condition Report 3160',
    lease: "Anantara World Islands Dubai Resort",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Finished",
    report: "Test text 11"
  },
  {
    key: "12",
    name: 'Ingoing Condition Report 3161',
    lease: "Bulgari Hotel & Resorts, Dubai",
    audit: "Report sent to tenants 15/02/22 at 08:04",
    status: "Updated",
    report: "Test text 12"
  },
];

export default defineComponent({
  components: {
    Button
  },
  setup() {
    const searchText = ref<string>('');
    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', searchText.value);
    };

    const handleChangeReportStatus = (value: string) => { console.log(`selected report status: ${value}`) };

    return {
      data,
      columns,
      searchText,
      onSearch,
      pagination: {
        size: "small",
        hideOnSinglePage: true,
        defaultPageSize: 10,
        position: ["bottomCenter"]
      },
      defaultReportStatus: ref('all'),
      handleChangeReportStatus,
      handleReport: (id: string) => alert(`Report button has been clicked, id: ${id}`),
      showAlert: () => { alert("Add Report button is not implemented yet") }
    }
  },
})
</script>


