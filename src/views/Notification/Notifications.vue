<template>
  <div style="margin: 24px auto;">
    <a-row justify="center">
      <a-col class="notifications-column" :xs="20" :sm="12" :lg="10">
        <section>
          <div v-if="notifications.length > 0">
            <div v-for="notification in notifications" :key="notification.id" style="padding: 16px; margin: 10px 0;">
              <p>
                <strong>{{ notification.id }}. </strong
                ><strong>{{ notification.title }}</strong>
              </p>
              <p>{{ notification.body }}</p>
              <div style="display: flex; justify-content: center">
                <Button className="white-black" type="dashed" @click="onDismiss(notification.id)">Dismiss</Button>
                &nbsp;
                <Button className="black-white" @click="onCreateReport">Create a report</Button>
              </div>
            </div>
          </div>
          <Spin v-show="loadingNotification" />
          <div v-show="errorNotification">
            {{ errorNotification }}
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
import store from '@/store';
import { ServiseFactory } from "@/services/ServiseFactory";
import { INotification } from "@/models/Notification/INotification";
import { Button, Spin } from "@/components/ui";

export default defineComponent({
  components: {
    Button, Spin
  },
  setup() {
    const notificationService = ServiseFactory.getNotificationServise();
    const onDismiss = (id: number) => notificationService.delete(id);

    onMounted(() => notificationService.getAll())

    return {
      notifications: computed<INotification[]>(() => store.state.notifications.notifications),
      errorNotification: computed<string | null>(() => store.state.base.error),
      loadingNotification: computed<boolean>(() => store.state.base.isLoading),
      onDismiss,
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