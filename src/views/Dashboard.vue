<template>
  <div>
    <div class="dashboard-container">
      <a-row justify="center">
        <a-col class="dashboard-column" :xs="24" :sm="24" :lg="14">
          <!-- Numbers -->
          <a-row justify="center">
            <a-col class="dashboard-column" :xs="24" :sm="24" :lg="24">
              <section class="dashboard-section">
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <div>
                    <img
                      src="/images/file_dock_search.svg"
                      alt="numbers icon"
                      style="margin: 0 10px 4px 0"
                    />
                    <Span className="gray80-span-20">Numbers</Span>
                  </div>
                  <a href="#" @click="setNumbersAreVisible">{{
                    numbersAreVisible ? "Hide" : "Show"
                  }}</a>
                </div>
                <a-row justify="space-between" v-show="numbersAreVisible">
                  <StatCard
                    v-for="item in statisticNumbers"
                    :statItem="item"
                    :key="item.title"
                  />
                </a-row>
              </section>
            </a-col>
          </a-row>

          <!-- Your Properties -->
          <a-row justify="center">
            <a-col class="dashboard-column" :xs="24" :sm="24" :lg="24">
              <section class="dashboard-section">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  "
                >
                  <div>
                    <img src="/images/key_dashboard.svg" alt="numbers icon" style="margin: 0 10px 4px 0" />
                    <Span className="gray80-span-20">Your Properties</Span>
                  </div>
                  <router-link to="/properties">
                    <Span className="orange-span-bold-12">See All</Span>
                  </router-link>
                </div>
                <a-row justify="space-between">
                  <DashboardPropertyCard
                    v-for="item in properties"
                    :property="item"
                    :key="item.id"
                  />
                </a-row>
              </section>
            </a-col>
          </a-row>

          <a-row justify="space-between">
            <!-- Reports -->
            <a-col :xs="24" :md="12" :lg="12">
              <div class="left-card-dashboard">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  "
                >
                  <div>
                    <img
                      src="/images/reports_dashboard.svg"
                      alt="numbers icon"
                      style="margin: 0 10px 4px 0"
                    />
                    <Span className="gray80-span-bold-16">Reports</Span>
                  </div>
                  <router-link to="/reports">
                    <Span className="orange-span-bold-12">See All</Span>
                  </router-link>
                </div>
                <DashboardReportItem
                  v-for="item in reports"
                  :report="item"
                  :key="item.id"
                />
              </div>
            </a-col>
            <!-- Applications -->
            <a-col :xs="24" :md="12" :lg="12">
              <div class="right-card-dashboard">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  "
                >
                  <div>
                    <img
                      src="/images/reports_dashboard.svg"
                      alt="numbers icon"
                      style="margin: 0 10px 4px 0"
                    />
                    <Span className="gray80-span-bold-16">Applications</Span>
                  </div>
                  <router-link to="/applications">
                    <Span className="orange-span-bold-12">See All</Span>
                  </router-link>
                </div>
                <DashboardApplicationItem
                  v-for="item in applications"
                  :application="item"
                  :key="item.id"
                />
              </div>
            </a-col>
          </a-row>

          <a-row>
            <section class="issues">
              <ul style="padding: '0 20px'; list-style: none">
                <li>
                  Property-card: only 'Available now' status is designed. Which
                  are other statuses and colors?.
                </li>
                <li>
                  Reports-card: only 'Report Updated' status is designed. Which
                  are other statuses and icons?.
                </li>
                <li>Reports-card: What does the 'Review' button?</li>
                <li>
                  Notifications - 3 kinds of notifications are designed with 'lorem ipsum' content, unknown destination and actions.
                </li>
              </ul>
            </section>
          </a-row>
        </a-col>

        <!-- Notifications -->
        <a-col class="dashboard-column" :xs="24" :sm="24" :lg="7">
          <section class="dashboard-section">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div>
                <img
                  src="/images/reports_dashboard.svg"
                  alt="numbers icon"
                  style="margin: 0 10px 4px 0"
                />
                <Span className="gray80-span-bold-16">Notifications</Span>
              </div>
              <router-link to="/notifications">
                <Span
                  className="orange-span-bold-12"
                  style="cursor: pointer"
                  >See All</Span
                >
              </router-link>
            </div>
            <div v-if="computedNotifications.length > 0">
              <div
                v-for="notification in computedNotifications"
                :key="notification.id"
                style="border-radius: 8px; border: 1px solid rgba(7, 31, 55, 0.05); padding: 16px; margin: 10px 0;">
                <p>
                  <strong>{{ notification.id }}. </strong
                  ><strong>{{ notification.title }}</strong>
                </p>
                <p>{{ notification.body }}</p>
                <div style="display: flex; justify-content: center">
                  <Button
                    className="white-black"
                    type="dashed"
                    @click="dismissNotification"
                    >Dismiss</Button
                  >
                  &nbsp;
                  <Button className="black-white" @click="createReport"
                    >Create a report</Button
                  >
                </div>
              </div>
            </div>
            <Spin v-show="computedIsLoadingNotification" />
            <div v-show="computedErrorNotification">
              {{ computedErrorNotification }}
            </div>
          </section>
        </a-col>
      </a-row>

      
    </div>

    
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import DashboardPropertyCard from "@/components/DashboardPropertyCard.vue";
import DashboardReportItem from "@/components/DashboardReportItem.vue";
import DashboardApplicationItem from "@/components/DashboardApplicationItem.vue";
import Button from "@/components/ui/Button.vue";
import Span from "@/components/ui/Span.vue";
import Spin from "@/components/ui/Spin.vue";
import StatCard from "@/components/StatCard.vue";
import { useStore } from "vuex";
import { IUserNotification } from "@/models";

const statisticNumbers = [
        { title: "Active Leases", amount: 15 },
        { title: "Completed Leases", amount: 3450 },
        { title: "Properties", amount: 2570 },
        { title: "New Requests", amount: 1 },
      ]

const properties = [
        {
          id: "q1",
          imgSrc: "/images/test_property1.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
        {
          id: "q2",
          imgSrc: "/images/test_property2.png",
          name: "Maldives",
          address: "Crown Beach House Maldives",
          status: "Available Now",
          bathrooms: 1,
          beds: 2,
          area: 36000,
          price: 598,
        },
      ]

const reports = [
        { id: "q1", created_at: "2020-06-24", status: "Report Updated" },
        { id: "q2", created_at: "2021-01-15", status: "Report Updated" },
        { id: "q3", created_at: "2022-05-30", status: "Report Updated" },
      ]

const applications = [
        {
          id: "q1",
          created_at: "2020-06-24",
          address: "Crown Beach House Maldives",
          status: "New",
        },
        {
          id: "q2",
          created_at: "2021-01-15",
          address: "Crown Beach House Maldives",
          status: "New",
        },
        {
          id: "q3",
          created_at: "2022-05-30",
          address: "Crown Beach House Maldives",
          status: "New",
        },
      ]

export default defineComponent({
  name: "DashboardView",
  components: {
    DashboardApplicationItem,
    DashboardPropertyCard,
    DashboardReportItem,
    Button,
    Span,
    Spin,
    StatCard,
  },
  setup() {
    const dismissNotification = () => alert("Dismiss action is not implemented yet.");
    const createReport = () => alert("Create a Report action is not implemented yet.");
    const showSeeAllAlert = () =>  alert("See all action is not implemented yet.");

    const numbersAreVisible = ref(true);
    
    const store = useStore();

    onMounted(() => {
      store.dispatch('notifications/getDashboardNotifications')
    })

    return {
      computedNotifications: computed<IUserNotification[]>(() => store.state.notifications.notifications),
      computedErrorNotification: computed<string | null>(() => store.state.notifications.errorNotification),
      computedIsLoadingNotification: computed<boolean>(() => store.state.notifications.isNotificationsLoading),
      createReport,
      dismissNotification,
      numbersAreVisible,
      setNumbersAreVisible: () => numbersAreVisible.value = !numbersAreVisible.value,
      showSeeAllAlert,
      statisticNumbers, properties, reports, applications
    }
  }
});
</script>

<style scoped>
.dashboard-container {
  margin: 12px 75px;
}

.dashboard-column {
  margin: 0 8px 8px 8px;
}

.report-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 4px 0;
  background: linear-gradient(
      0deg,
      rgba(255, 180, 0, 0.1),
      rgba(255, 180, 0, 0.1)
    ),
    #ffffff;
  border-radius: 10px;
}

.left-card-dashboard {
  padding: 16px 24px 24px;
  background-color: white;
  border: 1px solid rgba(7, 31, 55, 0.05);
  box-shadow: 0px 0px 5px rgba(26, 39, 37, 0.05);
  border-radius: 10px;
  margin-right: 8px;
}

.right-card-dashboard {
  padding: 16px 24px 24px;
  background-color: white;
  border: 1px solid rgba(7, 31, 55, 0.05);
  box-shadow: 0px 0px 5px rgba(26, 39, 37, 0.05);
  border-radius: 10px;
  margin-left: 8px;
}

@media (max-width: 768px) {
  .left-card-dashboard {
    margin-right: 0;
  }
  .right-card-dashboard {
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>
