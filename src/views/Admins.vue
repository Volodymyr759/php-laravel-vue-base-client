<template>
  <div class="filters-wrapper">
    <a-input-search
      v-model:value="searchText"
      placeholder="Search"
      style="width: 308px;"
      size="large"
      @search="onSearch"
    />
    <Button className="blue-white" size="large" @click="showAlert">+ Add Admin</Button>
  </div>
  <div class="table-wrapper">
    <a-row justify="center">
      <a-col>
        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'photo'">
              <a-avatar size="large" :src="record.photo" />
            </template>
            <template v-if="column.key === 'password'">
              <a-input-password :value="record.password" size="large" />
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/ui/Button.vue";

const columns = [
  {
    title: "FIRST NAME",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "LAST NAME",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "PHOTO",
    dataIndex: "photo",
    key: "photo",
  },
  {
    title: "PHONE NUMBER",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "PASSWORD",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "ACTIONS",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    firstName: "Jane",
    lastName: "Dane",
    photo: "https://picsum.photos/200/300?random=1",
    phone: "123123123120",
    email: "jane@google.com",
    password: "Password1.",
  },
  {
    key: "2",
    firstName: "John",
    lastName: "Done",
    photo: "https://picsum.photos/200/300?random=2",
    phone: "123123123121",
    email: "john@google.com",
    password: "Password2.",
  },
  {
    key: "3",
    firstName: "Jack",
    lastName: "Dack",
    photo: "https://picsum.photos/200/300?random=3",
    phone: "123123123122",
    email: "jack@google.com",
    password: "Password3.",
  },
  {
    key: "4",
    firstName: "Sharon",
    lastName: "Stone",
    photo: "https://picsum.photos/200/300?random=4",
    phone: "123123123123",
    email: "sharon@google.com",
    password: "Password4.",
  },
  {
    key: "5",
    firstName: "Jenny",
    lastName: "Denny",
    photo: "https://picsum.photos/200/300?random=5",
    phone: "123123123124",
    email: "jenny@google.com",
    password: "Password5.",
  },
  {
    key: "6",
    firstName: "Jackie",
    lastName: "Chan",
    photo: "https://picsum.photos/200/300?random=6",
    phone: "123123123125",
    email: "Jackie@google.com",
    password: "Password6.",
  },
  {
    key: "7",
    firstName: "Winston",
    lastName: "Churchill",
    photo: "https://picsum.photos/200/300?random=7",
    phone: "123123123126",
    email: "winston@google.com",
    password: "Password7.",
  },
  {
    key: "8",
    firstName: "Leo",
    lastName: "Burnett",
    photo: "https://picsum.photos/200/300?random=8",
    phone: "123123123127",
    email: "leo@google.com",
    password: "Password8.",
  },
  {
    key: "9",
    firstName: "Lucky",
    lastName: "Strike",
    photo: "https://picsum.photos/200/300?random=9",
    phone: "123123123128",
    email: "lucky@google.com",
    password: "Password9.",
  },
  {
    key: "10",
    firstName: "Camel",
    lastName: "Trophy",
    photo: "https://picsum.photos/200/300?random=10",
    phone: "123123123129",
    email: "camel@google.com",
    password: "Password10.",
  },
  {
    key: "11",
    firstName: "Chester",
    lastName: "Field",
    photo: "https://picsum.photos/200/300?random=11",
    phone: "123123123130",
    email: "chester@google.com",
    password: "Password11.",
  },
  {
    key: "12",
    firstName: "Pall",
    lastName: "Mall",
    photo: "https://picsum.photos/200/300?random=12",
    phone: "123123123131",
    email: "pall@google.com",
    password: "Password12.",
  },
];

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const searchText = ref<string>("");
    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      console.log("or use this.value", searchText.value);
    };

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
      handleReport: (id: string) =>
        alert(`Report button has been clicked, id: ${id}`),
      showAlert: () => {
        alert("Add Admin button is not implemented yet");
      },
      onEdit: (id: string) => alert(`Edit button has been clicked, id: ${id}`),
      onUnknown: (id: string) =>
        alert(`Unknown button has been clicked, id: ${id}`),
      onDelete: (id: string) =>
        alert(`Delete button has been clicked, id: ${id}`),
    };
  },
});
</script>
