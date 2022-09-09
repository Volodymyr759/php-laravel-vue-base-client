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
        <Button className="blue-white" size="large" @click="onAddTenant">+ Add Tenant</Button>
      </a-col>
    </a-row>
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
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'ingoingStatus'">
              <div v-if="record.ingoingStatus === 'Approved'"  style="text-align: center">
                <img src="/images/green_circle.svg" alt="green circle" style="margin: 0 8px 3px 0"/>{{record.ingoingStatus}}
              </div>
              <div v-else-if="record.ingoingStatus === 'In Progress'"  style="text-align: center">
                <img src="/images/yellow_circle.svg" alt="yellow circle" style="margin: 0 8px 3px 0"/>{{record.ingoingStatus}}
              </div>
              <div v-else style="text-align: center">
                <img src="/images/red_ellipse.svg" alt="red ellipse" style="margin: 0 8px 3px 0"/>{{record.ingoingStatus}}
              </div>
            </template>
            <template v-else-if="column.key === 'registration'">
              <div v-if="record.registration === 'Not Completed'"  style="text-align: center">
                <img src="/images/reg_status_not_completed.svg" alt="not completed" />
              </div>
              <div v-else style="text-align: center">
                <img src="/images/reg_status_completed.svg" alt="completed" />
              </div>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a @click="onEdit(record.key)">
                  <a-space>
                    <img src="/images/edit.svg" alt="edit" />
                  </a-space>
                </a>
                <a-divider type="vertical" />
                <a @click="onUnknown(record.key)">
                  <a-space>
                    <img src="/images/sign_in_squre.svg" alt="sign_in_squre" />
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
    <ul style="padding: '0 20px'; list-style: none;">
      <li>Destination of right arrow icon? (middle icon in actions)</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from '@/components/ui/Button.vue';

const columns = [
  {
    title: "FIRST NAME",
    name: "name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "LAST NAME",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "ACTIVE LEASE",
    dataIndex: "activeLease",
    key: "activeLease",
  },
  {
    title: "INGOING STATUS",
    dataIndex: "ingoingStatus",
    key: "ingoingStatus",
  },
  {
    title: "REGISTRATION",
    dataIndex: "registration",
    key: "registration",
  },
  {
    title: "ACTIONS",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    email: "john@gmail.com",
    phoneNumber: "+971123456001",
    activeLease: "Crown Beach House Maldives",
    ingoingStatus: "Approved",
    registration: "Not Completed",
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    email: "jim@gmail.com",
    phoneNumber: "+971123456002",
    activeLease: "Anantara World Islands Dubai Resort",
    ingoingStatus: "In Progress",
    registration: "Completed",
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456003",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Rejected",
    registration: "Completed",
  },
  {
    key: "4",
    firstName: "Jane",
    lastName: "Jane",
    email: "jane@google.com",
    phoneNumber: "+971123456004",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "In Progress",
    registration: "Completed",
  },
  {
    key: "5",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456005",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Approved",
    registration: "Not Completed",
  },
  {
    key: "6",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456006",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Rejected",
    registration: "Completed",
  },
  {
    key: "7",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456007",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "In Progress",
    registration: "Completed",
  },
  {
    key: "8",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456008",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Approved",
    registration: "Not Completed",
  },
  {
    key: "9",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456009",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Rejected",
    registration: "Completed",
  },
  {
    key: "10",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456010",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "In Progress",
    registration: "Completed",
  },
  {
    key: "11",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456011",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Approved",
    registration: "Not Completed",
  },
  {
    key: "12",
    firstName: "Joe",
    lastName: "Black",
    email: "joe@gmail.com",
    phoneNumber: "+971123456012",
    activeLease: "Bulgari Hotel & Resorts, Dubai",
    ingoingStatus: "Rejected",
    registration: "Completed",
  }
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

    return {
      data,
      columns,
      onAddTenant: () => alert("Add Tenant button is not implemented yet."),
      onDelete: (id: string) => alert(`onDelete function is not implemented yet, id: ${id}`),
      onEdit: (id: string) => alert(`onEdit function is not implemented yet, id: ${id}`),
      onSearch,
      onUnknown: (id: string) => alert(`onUnknown function is not implemented yet, id: ${id}`),
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