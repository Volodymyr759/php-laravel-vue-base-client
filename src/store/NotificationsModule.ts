import { INotification } from "@/models/Notification/INotification";
import { INotificationsState } from "./types";

export default {
  namespaced: true,
  state: (): INotificationsState => ({
    notifications: []
  }),
  getters: {},
  mutations: {
    removeNotification(state: INotificationsState, id: number) {
      const index = state.notifications.findIndex((notification) => notification.id === id);
      if (index >= 0) state.notifications.splice(index, 1);
    },
    setNotifications(state: INotificationsState, notifications: INotification[]) {
      state.notifications = notifications;
    }
  },
  actions: {},
};
