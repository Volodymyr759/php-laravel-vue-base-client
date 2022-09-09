import NotificationsModule from './NotificationsModule'
import { createStore } from 'vuex'
import { NotificationsState, State } from './types';

export default createStore<State>({
  modules: {
    notifications: NotificationsModule
  }
})
