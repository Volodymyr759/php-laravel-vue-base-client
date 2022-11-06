<template>
  <div class="filters-wrapper">
    <a-input-search
      v-model:value="searchText"
      placeholder="Search"
      style="width: 308px;"
      size="large"
      @search="onSearch"
    />
    <a-select size="large" style="width: 200px" @change="handleChangeAppStatus" v-model:value="defaultAppStatus">
      <a-select-option value="all">Status: All</a-select-option>
      <a-select-option value="new">New</a-select-option>
      <a-select-option value="in_progress">In Progress</a-select-option>
      <a-select-option value="finished">Finished</a-select-option>
    </a-select>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <!-- PROPERTY NAME  -->
                {{ column.title }}
              </span>
            </template>
          </template>
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'requestType'">
              <div v-if="record.requestType === 'Gas'" class="text-align-left">
                <img src="/images/gas_request.svg" alt="gas request" class="circle-item"/>{{record.requestType}}
              </div>
              <div v-else-if="record.requestType === 'Appliance'" class="text-align-left">
                <img src="/images/appliance_request.svg" alt="appliance request" class="circle-item"/>{{record.requestType}}
              </div>
              <div v-else-if="record.requestType === 'Handy Work'" class="text-align-left">
                <img src="/images/handy_request.svg" alt="handy work request" class="circle-item"/>{{record.requestType}}
              </div>
              <div v-else-if="record.requestType === 'Wall Paint'" class="text-align-left">
                <img src="/images/paint_request.svg" alt="wall paint request" class="circle-item"/>{{record.requestType}}
              </div>
            </template>
            <template v-else-if="column.key === 'lease'">
              <img :src="'https://picsum.photos/200/300?random=' + record.key" alt="photo" width="65" height="37" />
              <span>&nbsp;&nbsp;&nbsp;{{ record.lease }}</span>
            </template>
            <template v-else-if="column.key === 'applicant'">
              <a-avatar size="large" :src="record.applicant" />
            </template>
            <template v-else-if="column.key === 'status'">
              <div v-if="record.status === 'New'" class="text-align-center">
                <img src="/images/blue_ellipse.svg" alt="blue circle" class="circle-item"/>{{record.status}}
              </div>
              <div v-else-if="record.status === 'In Progress'" class="text-align-center">
                <img src="/images/yellow_circle.svg" alt="yellow circle" class="circle-item"/>{{record.status}}
              </div>
              <div v-else-if="record.status === 'Finished'" class="text-align-center">
                <img src="/images/green_circle.svg" alt="green circle" class="circle-item"/>{{record.status}}
              </div>
            </template>
            <template v-else-if="column.key === 'chat'">
              <div class="chat" :key="record.key">
                <img src="/images/chat.svg" alt="chat" /><img src="/images/right_arrow.svg" alt="arrow" />
              </div>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/ui/Button.vue";
import Span from "@/components/ui/Span.vue";

const columns = [
  {
    title: "REQUEST TYPE",
    dataIndex: "requestType",
    key: "requestType",
  },
  {
    title: "LEASE",
    dataIndex: "lease",
    key: "lease",
  },
  {
    title: "APPLICANT",
    dataIndex: "applicant",
    key: "applicant",
  },
  {
    title: "SUBMITTED",
    dataIndex: "submitted",
    key: "submitted",
  },
  {
    title: "CLOSED",
    dataIndex: "closed",
    key: "closed",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "CHAT",
    key: "chat",
  },
];

const data = [
  {
    key: "1",
    requestType: "Gas",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/640/360",
    submitted: "2020-06-19",
    closed: "-",
    status: "New",
  },
  {
    key: "2",
    requestType: "Appliance",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/138",
    submitted: "2020-07-17",
    closed: "-",
    status: "In Progress",
  },
  {
    key: "3",
    requestType: "Handy Work",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/139",
    submitted: "2021-08-18",
    closed: "-",
    status: "In Progress",
  },
  {
    key: "4",
    requestType: "Wall Paint",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/286",
    submitted: "2020-06-19",
    closed: "2021-06-19",
    status: "Finished",
  },
  {
    key: "5",
    requestType: "Wall Paint",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/96/139",
    submitted: "2020-07-17",
    closed: "2022-07-17",
    status: "Finished",
  },
  {
    key: "6",
    requestType: "Wall Paint",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/138",
    submitted: "2021-08-18",
    closed: "2022-08-18",
    status: "Finished",
  },
  {
    key: "7",
    requestType: "Wall Paint",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/139",
    submitted: "2020-06-19",
    closed: "2021-06-19",
    status: "Finished",
  },
  {
    key: "8",
    requestType: "Wall Paint",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/286",
    submitted: "2020-07-17",
    closed: "2020-07-17",
    status: "Finished",
  },
  {
    key: "9",
    requestType: "Wall Paint",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/96/139",
    submitted: "2021-08-18",
    closed: "2022-08-18",
    status: "Finished",
  },
  {
    key: "10",
    requestType: "Wall Paint",
    lease: "Crown Beach House Maldives",
    applicant: "https://placekitten.com/200/138",
    submitted: "2020-06-19",
    closed: "2022-06-19",
    status: "Finished",
  },
  {
    key: "11",
    requestType: "Wall Paint",
    lease: "Anantara World Islands Dubai Resort",
    applicant: "https://placekitten.com/200/139",
    submitted: "2020-07-17",
    closed: "2022-07-17",
    status: "Finished",
  },
  {
    key: "12",
    requestType: "Wall Paint",
    lease: "Bulgari Hotel & Resorts, Dubai",
    applicant: "https://placekitten.com/200/286",
    submitted: "2021-08-18",
    closed: "2022-08-18",
    status: "Finished",
  },
];

export default defineComponent({
  components: {
    Button,
    Span,
  },
  setup() {
    const searchText = ref<string>("");
    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      console.log("or use this.value", searchText.value);
    };

    const handleChangeAppStatus = (value: string) => {
      alert(`Action is not implemented yet. Selected app status: ${value}`);
    };

    const showAlert = () => alert("Action is not implemented yet.");

    return {
      data,
      columns,
      searchText,
      onSearch,
      pagination: {
        size: "small",
        hideOnSinglePage: true,
        defaultPageSize: 10,
        position: ["bottomCenter"],
      },
      defaultAppStatus: ref("all"),
      handleChangeAppStatus,
      showAlert,
    };
  },
});
</script>


