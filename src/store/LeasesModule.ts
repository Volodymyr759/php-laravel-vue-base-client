// import { ActionContext } from "vuex";
import { State, ILeasesState } from "@/store/types";
// import { getLeasesAxios, createLeaseAxios, updateLeaseAxios, deleteLeaseAxios } from "@/api/leases";
import { EditCreateLeaseDto, ILease } from "@/models/Lease";
// import { IPageSettings } from "@/services/BaseServise";

// type Context = ActionContext<ILeasesState, State>;

export default {
  namespaced: true,
  state: (): ILeasesState => ({
    leases: [],
    total: 0,
  }),
  getters: {},
  mutations: {
    addLease(state: ILeasesState, createdLease: ILease) {
      state.leases.push({ ...createdLease });
    },
    updateLease(state: ILeasesState, updatedLease: ILease) {
      const index = state.leases.findIndex(
        (lease) => lease.id === updatedLease.id
      );
      if (index >= 0) {
        state.leases[index] = {
          ...state.leases[index],
          ...updatedLease,
        };
      }
    },
    removeLease(state: ILeasesState, id: number) {
      const index = state.leases.findIndex(
        (lease) => lease.id === id
      );
      if (index >= 0) state.leases.splice(index, 1);
    },
    setLeases(state: ILeasesState, leases: ILease[]) {
      state.leases = leases;
    },
    setTotal(state: ILeasesState, total: number) {
      state.total = total;
    }
  },
  actions: {},
};
