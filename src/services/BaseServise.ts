import store from "@/store";
import { ActionType, IFilterItem, IPageSettings, IPagination, ISortItem } from "./types";
import { IEditCreateLeaseDto } from "@/models/Lease";
import { IEditCreatePropertyDto } from "@/models/Property";
import { IEditCreateTenantDto } from "@/models/Tenant";
import { getLeasesAxios, createLeaseAxios, updateLeaseAxios, deleteLeaseAxios } from "@/api/leases";
import { deleteNotificationsAxios, getNotificationsAxios } from "@/api/notifications";
import { getPropertiesAxios, createPropertyAxios, updatePropertyAxios, deletePropertyAxios } from "@/api/properties";
import { createTenantAxios, deleteTenantAxios, getTenantsAxios, updateTenantAxios } from "@/api/tenants";

export abstract class BaseServise {
  pageSettings: IPageSettings;
  constructor(
    filters: IFilterItem[],
    sorting: ISortItem[],
    pagination: IPagination
  ) {
    this.pageSettings = { filters, sorting, pagination };
  }

  abstract getAll(): void;
  abstract delete(id: number): void;

  async getDataAndSaveToStore(
    actionType: ActionType,
    payload?: // about Type Guard and checking interfaces: https://basarat.gitbook.io/typescript/type-system/typeguard
      | number
      | IEditCreateLeaseDto
      | IEditCreateTenantDto
      | IEditCreatePropertyDto
  ): Promise<void> {
    try {
      store.commit("base/setError", null);
      store.commit("base/setIsLoading", true);
      switch (actionType) {
        case ActionType.LeasesGet:
          const leases = await getLeasesAxios(
            this.pageSettings.filters[0].value,
            this.pageSettings.filters[1].value,
            this.pageSettings.sorting[0].field,
            this.pageSettings.sorting[0].direction,
            this.pageSettings.pagination.per_page,
            this.pageSettings.pagination.current_page
          );
          store.commit("leases/setLeases", leases.data);
          store.commit("leases/setTotal", leases.total);
          break;
        case ActionType.LeaseCreate:
          if (payload && typeof payload !== 'number' && 'start_date' in payload) {
            store.commit("leases/addLease", await createLeaseAxios(payload));
          }
          break;
        case ActionType.LeaseUpdate:
          if (payload && typeof payload !== 'number' && 'start_date' in payload) {
            store.commit("leases/updateLease", await updateLeaseAxios(payload));
          }
          break;
        case ActionType.LeaseDelete:
          if (typeof payload === "number") {
            store.commit("leases/removeLease", (await deleteLeaseAxios(payload)).id);
          }
          break;
        case ActionType.NotificationsGet:
          store.commit("notifications/setNotifications", (await getNotificationsAxios()).data);
          break;
        case ActionType.NotificationDelete:
          if (typeof payload === "number") {
            store.commit("notifications/removeNotification", (await deleteNotificationsAxios(payload)).id);
          }
          break;
        case ActionType.PropertiesGet:
          const properties = await getPropertiesAxios(
            this.pageSettings.filters[0].value,
            this.pageSettings.filters[1].value,
            this.pageSettings.sorting[0].field,
            this.pageSettings.sorting[0].direction,
            this.pageSettings.pagination.per_page,
            this.pageSettings.pagination.current_page
          );
          store.commit("properties/setProperties", properties.data);
          store.commit("properties/setTotal", properties.total);
          break;
        case ActionType.PropertyCreate:
          if (payload && typeof payload !== 'number' && 'address' in payload) {
            store.commit("properties/addProperty", await createPropertyAxios(payload));
          }
          break;
        case ActionType.PropertyUpdate:
          if (payload && typeof payload !== 'number' && 'address' in payload) {
            store.commit("properties/updateProperty", await updatePropertyAxios(payload));
          }
          break;
        case ActionType.PropertyDelete:
          if (typeof payload === "number") {
            store.commit("properties/removeProperty", (await deletePropertyAxios(payload)).id);
          }
          break;
        case ActionType.TenantsGet:
          const tenants = await getTenantsAxios(
            this.pageSettings.filters[0].value, 
            this.pageSettings.sorting[0].field, 
            this.pageSettings.sorting[0].direction, 
            this.pageSettings.pagination.per_page, 
            this.pageSettings.pagination.current_page
            );
          store.commit("tenants/setTenants", tenants.data);
          store.commit("tenants/setTotal", tenants.total);
          break;
        case ActionType.TenantCreate:
          if (payload && typeof payload !== 'number' && 'first_name' in payload) {
            store.commit("tenants/addTenant", await createTenantAxios(payload));
          }
          break;
        case ActionType.TenantUpdate:
          if (payload && typeof payload !== 'number' && 'first_name' in payload) {
            store.commit("tenants/updateTenant", await updateTenantAxios(payload));
          }
          break;
        case ActionType.TenantDelete:
        if (typeof payload === "number") {
          store.commit("tenants/removeTenant", (await deleteTenantAxios(payload)).id);
        }
        break;
        default:
          break;
      }
    } catch (error) {
      store.commit("base/setError", error);
    } finally {
      store.commit("base/setIsLoading", false);
    }
  }
}


