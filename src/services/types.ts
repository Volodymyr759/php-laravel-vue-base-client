export enum ActionType {
  LeasesGet,
  LeaseCreate,
  LeaseUpdate,
  LeaseDelete,
  NotificationsGet,
  NotificationDelete,
  PropertiesGet,
  PropertyCreate,
  PropertyUpdate,
  PropertyDelete,
  TenantsGet,
  TenantCreate,
  TenantUpdate,
  TenantDelete
}

export interface IPageSettings {
  filters: IFilterItem[];
  sorting: ISortItem[];
  pagination: IPagination;
}

export interface IFilterItem {
  field: string;
  value: string;
}

export interface ISortItem {
  field: string;
  direction: string;
}

export interface IPagination {
  current_page: number;
  per_page: number;
}
