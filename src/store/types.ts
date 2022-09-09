import { IUserNotification } from '@/models'

export interface State {
    notifications: NotificationsState;
  }

export interface NotificationsState {
    notifications: IUserNotification[];
    isNotificationsLoading: boolean;
    errorNotification: string | null;
}