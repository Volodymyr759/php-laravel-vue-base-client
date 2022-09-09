<template>
  <div style="margin: 24px auto;">
    <a-row justify="center">
      <a-col class="notifications-column" :xs="20" :sm="12" :lg="10">
        <section>
          <div v-if="computedNotifications.length > 0">
            <div
              v-for="notification in computedNotifications"
              :key="notification.id"
              style="padding: 16px; margin: 10px 0;">
              <p>
                <strong>{{ notification.id }}. </strong
                ><strong>{{ notification.title }}</strong>
              </p>
              <p>{{ notification.body }}</p>
              <div style="display: flex; justify-content: center">
                <Button className="white-black" type="dashed" @click="onDismissNotification">Dismiss</Button>
                &nbsp;
                <Button className="black-white" @click="onCreateReport">Create a report</Button>
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
    <section class="issues">
      <ul :style="{ padding: '0 20px' }">
        <li>Should be pagination here ?</li>
        <li>3 kinds of notifications are designed with 'lorem ipsum' content, unknown destination and actions.</li>
      </ul>
  </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { IUserNotification } from "@/models";
import Button from "@/components/ui/Button.vue";
import Spin from "@/components/ui/Spin.vue";

export default defineComponent({
  components: {
    Button,
    Spin
  },
  setup() {
    // const onDismissNotification = () => alert("Dismiss action is not implemented yet.");
    // const onCreateReport = () => alert("Create a Report action is not implemented yet.");

    const store = useStore();

    onMounted(() => {
      store.dispatch('notifications/getAllNotifications')
    })

    return {
      computedNotifications: computed<IUserNotification[]>(() => store.state.notifications.notifications),
      computedErrorNotification: computed<string | null>(() => store.state.notifications.errorNotification),
      computedIsLoadingNotification: computed<boolean>(() => store.state.notifications.isNotificationsLoading),
      onDismissNotification: () => alert("Dismiss action is not implemented yet."),
      onCreateReport: () => alert("Create a Report action is not implemented yet.")
    };
  },
});
</script>

<style scoped>
.notifications-column {
  background-color: white;
  border: 1px solid rgba(7, 31, 55, 0.05);
  box-shadow: 0px 0px 5px rgba(26, 39, 37, 0.05);
  border-radius: 10px;
}
</style>