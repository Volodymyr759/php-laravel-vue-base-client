import { IPropertiesState } from "@/store/types";
import { IProperty } from "@/models/Property";

export default {
  namespaced: true,
  state: (): IPropertiesState => ({
    properties: [],
    total: 0,
  }),
  getters: {},
  mutations: {
    addProperty(state: IPropertiesState, createdProperty: IProperty) {
      state.properties.push({ ...createdProperty });
    },
    updateProperty(state: IPropertiesState, updatedProperty: IProperty) {
      const index = state.properties.findIndex(
        (property) => property.id === updatedProperty.id
      );
      if (index >= 0) {
        state.properties[index] = {
          ...state.properties[index],
          ...updatedProperty,
        };
      }
    },
    removeProperty(state: IPropertiesState, id: number) {
      const index = state.properties.findIndex((property) => property.id === id);
      if (index >= 0) state.properties.splice(index, 1);
    },
    setProperties(state: IPropertiesState, properties: IProperty[]) {
      state.properties = properties;
    },
    setTotal(state: IPropertiesState, total: number) {
      state.total = total;
    }
  }, 
  actions: {},
};
