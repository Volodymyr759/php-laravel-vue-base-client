<template>
  <div class="filters-wrapper">
    <a-input-search v-model:value="searchText" placeholder="Search" style="width: 308px;" size="large" @search="onSearch"/>
    <a-select size="large" style="width: 200px" @change="handleChangeAppStatus" v-model:value="defaultAppStatus">
      <a-select-option value="all">Applications: All</a-select-option>
      <a-select-option value="denied">Denied</a-select-option>
      <a-select-option value="approved">Approved</a-select-option>
    </a-select>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <a-table :columns="columns" :data-source="computedData" :pagination="pagination">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <!-- PROPERTY NAME  -->
                {{ column.title }}
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'lease'">
              <img :src="'https://picsum.photos/200/300?random=' + record.key" alt="photo" class="lease-image"/>
              <span>&nbsp;&nbsp;&nbsp;{{ record.lease }}</span>
            </template>
            <template v-else-if="column.key === 'applicant'">
              <a-avatar size="large" :src="record.applicant" />
            </template>
            <template v-else-if="column.key === 'actionsStatus'">
              <div v-if="record.actionsStatus === 'Requested'" class="text-align-center">
                <Button className="white-red" type="dashed" @click="onDenyRequest(record.key)">Deny Request</Button>&nbsp;
                <Button className="white-blue" type="dashed" @click="onApproveRequest(record.key)">Approve Request</Button>
              </div>
              <div v-else-if="record.actionsStatus === 'Approved'" class="text-align-center">
                <img src="/images/green_circle.svg" alt="green circle" class="circle-item" />{{record.actionsStatus}}
              </div>
              <div v-else class="text-align-center">
                <img src="/images/red_ellipse.svg" alt="red ellipse" class="circle-item"/>{{record.actionsStatus}}
              </div>
            </template>
            <template v-else-if="column.key === 'chat'">
              <div class="chat">
                <img src="/images/chat.svg" alt="chat" />
                <img src="/images/right_arrow.svg" alt="arrow" />
              </div>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
  
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Button from "@/components/ui/Button.vue";

// read more about sorting fields of table: https://www.antdv.com/components/table/#Table
type TableDataType = {
  key: string;
  lease: string;
};

const columns = [
  {
    title: "LEASE",
    dataIndex: "lease",
    key: "lease",
    sorter: (a: TableDataType, b: TableDataType) =>
      a.lease.length - b.lease.length,
  },
  {
    title: "APPLICANT",
    dataIndex: "applicant",
    key: "applicant",
  },
  {
    title: "LEASE START DAY",
    dataIndex: "leaseStartDay",
    key: "leaseStartDay",
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "ACTIONS / STATUS",
    dataIndex: "actionsStatus",
    key: "actionsStatus",
  },
  {
    title: "CHAT",
    key: "chat",
  },
];

const data = [
  {
    key: "1",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/640/360",
    leaseStartDay: "2020-06-19",
    duration: "1 year",
    actionsStatus: "Approved",
  },
  {
    key: "2",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/138",
    leaseStartDay: "2020-07-17",
    duration: "2 years",
    actionsStatus: "Denied",
  },
  {
    key: "3",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/139",
    leaseStartDay: "2021-08-18",
    duration: "1 year",
    actionsStatus: "Requested",
  },
  {
    key: "4",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/286",
    leaseStartDay: "2020-06-19",
    duration: "1 year",
    actionsStatus: "Approved",
  },
  {
    key: "5",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/96/139",
    leaseStartDay: "2020-07-17",
    duration: "2 years",
    actionsStatus: "Requested",
  },
  {
    key: "6",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/138",
    leaseStartDay: "2021-08-18",
    duration: "1 year",
    actionsStatus: "Approved",
  },
  {
    key: "7",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/139",
    leaseStartDay: "2020-06-19",
    duration: "1 year",
    actionsStatus: "Requested",
  },
  {
    key: "8",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/286",
    leaseStartDay: "2020-07-17",
    duration: "2 years",
    actionsStatus: "Denied",
  },
  {
    key: "9",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/96/139",
    leaseStartDay: "2021-08-18",
    duration: "1 year",
    actionsStatus: "Approved",
  },
  {
    key: "10",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/138",
    leaseStartDay: "2020-06-19",
    duration: "1 year",
    actionsStatus: "Approved",
  },
  {
    key: "11",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/139",
    leaseStartDay: "2020-07-17",
    duration: "2 years",
    actionsStatus: "Requested",
  },
  {
    key: "12",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/286",
    leaseStartDay: "2021-08-18",
    duration: "1 year",
    actionsStatus: "Approved",
  },
];

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const searchText = ref<string>("");
    const applicationsFilter = ref<string>("all");
    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      console.log("or use this.value", searchText.value);
    };

    const handleChangeAppStatus = (value: string) => {
      applicationsFilter.value = value;
    };

    const computedData = computed(() => {
      return applicationsFilter.value === "all"
        ? data
        : [...data].filter(
            (app) =>
              app.actionsStatus.toLowerCase() === applicationsFilter.value
          );
    });

    return {
      data,
      columns,
      computedData,
      searchText,
      onApproveRequest: (id: string) =>
        alert(`Approve Request button has been clicked, id: ${id}`),
      onDenyRequest: (id: string) =>
        alert(`Deny Request button has been clicked, id: ${id}`),
      onSearch,
      pagination: {
        size: "small",
        hideOnSinglePage: true,
        defaultPageSize: 10,
        position: ["bottomCenter"],
      },
      defaultAppStatus: ref("all"),
      defaultPropertyStatus: ref("all"),
      handleChangeAppStatus,
    };
  },
});
</script>

<style scoped>
.lease-image {
  width: 65px;
  height: 37px;
}
</style>
