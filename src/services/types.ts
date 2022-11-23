import { IEditCreateLeaseDto } from "@/models/Lease";
import { IEditCreatePropertyDto, ISearchPropertyByAddressDto } from "@/models/Property";
import { IEditCreateTenantDto, ISearchTenantByFullName } from "@/models/Tenant";

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

export interface ILeaseService {
  pageSettings: IPageSettings;
  getDataAndSaveToStore: (actionType: ActionType,
    payload?: number
      | IEditCreateLeaseDto
      | IEditCreateTenantDto
      | IEditCreatePropertyDto) => Promise<void>;
  getAll: () => Promise<void>;
  delete: (id: number) => Promise<void>;
  create: (editCreateLeaseDto: IEditCreateLeaseDto) => Promise<void>;
  update: (editCreateLeaseDto: IEditCreateLeaseDto) => Promise<void>;
}

export interface INotificationService {
  pageSettings: IPageSettings;
  getDataAndSaveToStore: (actionType: ActionType,
    payload?: number
      | IEditCreateLeaseDto
      | IEditCreateTenantDto
      | IEditCreatePropertyDto) => Promise<void>;
  getAll: () => Promise<void>;
  delete: (id: number) => Promise<void>;
}

export interface IPropertyService {
  pageSettings: IPageSettings;
  getDataAndSaveToStore: (actionType: ActionType,
    payload?: number
      | IEditCreateLeaseDto
      | IEditCreateTenantDto
      | IEditCreatePropertyDto) => Promise<void>;
  getAll: () => Promise<void>;
  delete: (id: number) => Promise<void>;
  create: (editCreatePropertyDto: IEditCreatePropertyDto) => Promise<void>;
  update: (editCreatePropertyDto: IEditCreatePropertyDto) => Promise<void>;
  searchProperties: (searchText: string) => Promise<ISearchPropertyByAddressDto[]>;
}

export interface ITenantService {
  pageSettings: IPageSettings;
  getDataAndSaveToStore: (actionType: ActionType,
    payload?: number
      | IEditCreateLeaseDto
      | IEditCreateTenantDto
      | IEditCreatePropertyDto) => Promise<void>;
  getAll: () => Promise<void>;
  delete: (id: number) => Promise<void>;
  create: (editCreateTenantDto: IEditCreateTenantDto) => Promise<void>;
  update: (editCreateTenantDto: IEditCreateTenantDto) => Promise<void>;
  searchTenants: (searchText: string) => Promise<ISearchTenantByFullName[]>;
}

