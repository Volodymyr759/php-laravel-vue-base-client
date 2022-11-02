import { ITenantsState } from "@/store/types";
import { ITenant } from "@/models/Tenant";

export default {
  namespaced: true,
  state: (): ITenantsState => ({
    tenants: [],
    total: 0,
  }),
  getters: {},
  mutations: {
    addTenant(state: ITenantsState, createdTenant: ITenant) {
      state.tenants.push({ ...createdTenant });
    },
    updateTenant(state: ITenantsState, updatedTenant: ITenant) {
      const index = state.tenants.findIndex( (tenant) => tenant.id === updatedTenant.id );
      if (index >= 0) {
        state.tenants[index] = {
          ...state.tenants[index],
          ...updatedTenant,
        };
      }
    },
    removeTenant(state: ITenantsState, id: number) {
      const index = state.tenants.findIndex((tenant) => tenant.id === id);
      if (index >= 0) state.tenants.splice(index, 1);
    },
    setTenants(state: ITenantsState, tenants: ITenant[]) {
      state.tenants = tenants;
    },
    setTotal(state: ITenantsState, total: number) {
      state.total = total;
    }
  },
  actions: {},
};
