import { createStore } from 'vuex';
import { State } from '@/store/types';
import AuthModule from '@/store/AuthModule';
import BaseModule from '@/store/BaseModule';
import LeasesModule from '@/store/LeasesModule';
import NotificationsModule from '@/store/NotificationsModule';
import TenantsModule from '@/store/TenantsModule';
import PropertiesModule from '@/store/PropertiesModule';

export default createStore<State>({
  modules: {
    auth: AuthModule,
    base: BaseModule,
    leases: LeasesModule,
    notifications: NotificationsModule,
    properties: PropertiesModule,
    tenants: TenantsModule,
  }
})
