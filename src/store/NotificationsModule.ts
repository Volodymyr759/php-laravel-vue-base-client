import { IUserNotification } from "@/models"
import { NotificationsState } from "./types"
import { ActionContext } from "vuex"
import { State } from './types'
import { getNotificationsAxios } from '@/api/notifications'

type Context = ActionContext<NotificationsState, State>;

export default {
    namespaced: true,
    state: (): NotificationsState => ({
        notifications: [],
        isNotificationsLoading: false,
        errorNotification: null
    }),
    getters: {},
    mutations: {
        setNotifications(state: NotificationsState, notifications: IUserNotification[]) {
            state.notifications = notifications
        },
        setIsNotificationsLoading(state: NotificationsState, isLoading: boolean) {
            state.isNotificationsLoading = isLoading
        },
        setError(state: NotificationsState, message: string) {
            state.errorNotification = message
        }
    },
    actions: {
        async getAllNotifications(context: Context): Promise<IUserNotification[] | undefined> {
            try {
                context.commit('setError', null)
                context.commit('setIsNotificationsLoading', true)
                const notifications = await getNotificationsAxios(100) as IUserNotification[]
                context.commit('setNotifications', notifications)
                return context.state.notifications;
            } catch (error) {
                console.log('error in store: ', error)
                context.commit('setError', error)
            } finally {
                context.commit('setIsNotificationsLoading', false)
            }
        },
        async getDashboardNotifications(context: Context): Promise<IUserNotification[] | undefined> {
            try {
                context.commit('setError', null)
                context.commit('setIsNotificationsLoading', true)
                const notifications = await getNotificationsAxios(4) as IUserNotification[]
                context.commit('setNotifications', notifications)
                return context.state.notifications;
            } catch (error) {
                console.log('error in store: ', error)
                context.commit('setError', error)
            } finally {
                context.commit('setIsNotificationsLoading', false)
            }
        }
    }
}