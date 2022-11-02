import { IAuthUser } from '@/models/Auth';
import { ILease } from '@/models/Lease';
import { INotification } from '@/models/Notification/INotification';
import { IProperty } from '@/models/Property';
import { ITenant } from '@/models/Tenant';

export interface State {
  auth: IAuthState;
  base: IBaseState;
  leases: ILeasesState;
  notifications: INotificationsState;
  tenants: ITenantsState;
  properties: IPropertiesState;
}

export interface IAuthState {
  authUser: IAuthUser;
  returnUrl: string | null;
  isAuthUserLoading: boolean;
  errorAuthUser: string | null;
}

export interface IBaseState {
  isLoading: boolean;
  error: string | null;
}

export interface ILeasesState {
  leases: ILease[];
  // isLeasesLoading: boolean;
  // errorLease: string | null;
  total: number;
}

export interface INotificationsState {
  notifications: INotification[];
}

export interface IPropertiesState {
  properties: IProperty[];
  total: number;
}

export interface ITenantsState {
  tenants: ITenant[];
  total: number;
}
