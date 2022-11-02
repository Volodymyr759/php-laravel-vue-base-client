import { NotificationService } from "@/services/NotificationService";
import { IBaseState } from "./types";

export default {
  namespaced: true,
  state: (): IBaseState => ({
    isLoading: false,
    error: null
  }),
  getters: {},
  mutations: {
    setIsLoading(state: IBaseState, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    setError(state: IBaseState, message: string) {
      state.error = message;
    },
  },
  actions: {},
};
